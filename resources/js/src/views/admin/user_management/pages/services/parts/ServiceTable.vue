<template xmlns="http://www.w3.org/1999/html">
  <div>
    <v-select v-model="selectedCurrency" :items="currencies" label="Select Currency"></v-select>

    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="servicesWithPrice" :headers="headers"
                 :isLoading="isLoading" :title="title">

      <template v-slot:custom-status="slotItems">
        <div style="display:flex">
          <v-chip :color="slotItems.item.status == 1 ? 'success' : 'error'">
            {{ slotItems.item.status==1 ? 'active' : 'inactive'}}
          </v-chip>
        </div>
      </template>

      <template v-slot:custom-actions="slotItems">
        <div style="display:flex">
          <v-btn class="mr-1" v-on:click="openModal(slotItems.item)" color="primary" x-small>
            <v-icon small color="white">
              {{ icons.mdiPencil }}
            </v-icon>
          </v-btn>

          <v-btn class="mr-1" v-on:click="changeStatus(slotItems.item)"
                 :color="getStatusIcon(slotItems.item.status)['style']" x-small>
            <v-icon small color="white">
              {{ getStatusIcon(slotItems.item.status)['icon'] }}
            </v-icon>
          </v-btn>

          <v-btn class="mr-1" v-on:click="deleteItem(slotItems.item)" color="error" x-small>
            <v-icon small color="white">
              {{ icons.mdiTrashCanOutline }}
            </v-icon>
          </v-btn>
        </div>
      </template>

      <template v-slot:add-button>
        <v-dialog v-model="dialog" max-width="1000px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" x-small dark v-bind="attrs" v-on="on"
                   v-on:click="openModal('new')">
              <v-icon small color="white">
                {{ icons.mdiPlusThick }}
              </v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <div class="text-h5"><span v-if="editedItem.id != 0">{{ editedItem.name }}</span>
              </div>
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form">
              <div style="max-height: 70vh;overflow: auto">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['name']"
                            v-on:keyup="() => {errorMessages['name'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.name" required :label="$t('Service')"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="3">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['category']"
                            v-on:keyup="() => {errorMessages['category'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.category" required
                            :label="$t('category')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['price']"
                            v-on:keyup="() => {errorMessages['price'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.price" required :label="$t('price')"></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            :rules="[rules.required]" :error-messages="errorMessages['status']"
                            v-on:keyup="() => {errorMessages['status'] = ''}"
                            v-on:keypress.enter="saveModal"
                            v-model="editedItem.status" required :label="$t('status')"></v-text-field>
                      </v-col>

                    </v-row>
                  </v-container>
                </v-card-text>
              </div>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="closeModal">
                  {{ $t('cancel') }}
                </v-btn>
                <v-btn color="primary" @click="saveModal" :loading="isButtonLoading('/store')">
                  {{ $t('save') }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>

        </v-dialog>
      </template>
    </SimpleTable>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiCheck,
  mdiCloseThick,
  mdiDelete, mdiDotsVertical,
  mdiEyeCheckOutline,
  mdiEyeOffOutline,
  mdiEyeOutline,
  mdiLink,
  mdiAccountMultipleOutline,
  mdiPencil, mdiPlusThick, mdiTrashCanOutline,
  mdiInformationOutline,
  mdiSendOutline,
} from "@mdi/js";
import {computed, ref} from "@vue/composition-api";
import SimpleTable from "@/components/common/SimpleTable";
import {required, integerValidator, emailValidator} from '@core/utils/validation'
import {useRouter} from '@core/utils';
import axios from "axios";
import {can} from "../../../../../../@core/libs/acl/utils";
export default {
  name: "ServiceTable",
  components: {SimpleTable},
  props: {
    services: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const {route} = useRouter()
    let rules = {required, integerValidator, emailValidator}
    let icons = {
      mdiDelete,
      mdiPencil,
      mdiEyeCheckOutline,
      mdiEyeOffOutline,
      mdiEyeOutline,
      mdiCheck,
      mdiCloseThick,
      mdiDotsVertical,
      mdiTrashCanOutline,
      mdiPlusThick,
      mdiLink,
      mdiAccountMultipleOutline,
      mdiInformationOutline,
      mdiAccountOutline,
      mdiSendOutline
    }

    const tmpRole = ref(null)
    const form = ref('')
    const simpleTableKey = ref('init')
    const errorMessages = ref([])
    const isLoading = ref(false)
    const dialog = ref(false)
    const data = ref([])
    const tmpItem = ref({})
    const headers = ref([])
    const editedItem = ref({})
    data.value = props.services
    function standardModel() {
      return {
        id: 0,
        name: null,
        category: null,
        price: null,
        status: 1,
      };
    }

    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'id', search: true},
      {text: 'Service', value: 'name', search: true},
      {text: 'category', value: 'category', search: true},
      { text: 'price', value: 'price', search: true },
      {text: 'status', value: 'status', search: true, customSlot: true},
      {
        text: 'actions',
        value: 'actions',
        sortable: false,
        customSlot: true,
        search: false
      }
    ]
    function getStatusIcon(status){
      let statusIcons = [
        {
          'icon':icons.mdiEyeCheckOutline,
          'style':'primary'
        },
        {
          'icon':icons.mdiEyeOffOutline,
          'style':'error'
        }
      ]
      // return statusIcons[status]
      return statusIcons.find(icon => icon.icon === status) || statusIcons[0];

    }

    async function openModal(item) {
      if (item == 'new') {
        item = standardModel()
      }

      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
      dialog.value = true;
    }

    function closeModal() {
      dialog.value = false
      editedItem.value = standardModel()
    }

    function saveModal() {
      if (form.value.validate()) {
        isLoading.value = true

        let fd = new FormData();
        fd.append("id", editedItem.value.id);

        fd.append("name", editedItem.value.name);
        fd.append("category", editedItem.value.category);
        fd.append("price", editedItem.value.price);
        fd.append("status", editedItem.value.status);


        axios.post('/services/store', fd).then(response => {
          console.log(response.data)
          if (response.data.status == true) {
            if (response.data.meta == true) {
              data.value.unshift(response.data.data)
            } else {
              let checkItem = data.value.filter(item => item.id == tmpItem.value.id)
              data.value[data.value.indexOf(checkItem[0])] = response.data.data

            }
            simpleTableKey.value = Math.random();
            errorMessages.value = []
            dialog.value = false
          }
          isLoading.value = false;
          window.location.reload();
        }).catch(error => {
          if (error.response.status == 422) {
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }

    async function changeStatus(item) {
      if (await confirmAlert({'subtitle': 'confirmation_standards_change_status'})) {
        isLoading.value = true
        axios.put('/services/changeStatus', {
          'id': item.id,
          'status': item.status ? 0 : 1
        }).then(response => {
          if (response.data.status) {
            item.status = response.data.data
            flashMsg('success', response.data.message)
          }
          isLoading.value = false
        }).catch(error => {
          if (error.response.status == 422) {
            flashMsg('error', error.response.data.message)
          }
          isLoading.value = false
        })
      }
    }

    async function deleteItem(item) {
      if (await confirmAlert({'subtitle':'confirmation_delete_service'})) {
        isLoading.value = true
        axios.put( `/services/${item.id}/delete`, {'id': item.id}).then(response => {
          if (response.data.status) {
            let checkItem = data.value.filter(i => i.id == item.id)
            data.value.splice(data.value.indexOf(checkItem[0]), 1);
          }
          isLoading.value = false
        }).catch(error => {
          if (error.response.status == 422) {
            flashMsg('error', error.response.data.message)
          }
          isLoading.value = false
        })
      }
    }


    return {
      selectedCurrency: 'DEN',
      currencies: ['USD', 'EUR', 'DEN'],
      exchangeRates: {
        DEN: 1,   // 1 USD to USD (base currency)
        EUR: 0.016, // Hypothetical exchange rate for EUR to USD
        USD: 0.017, // Hypothetical exchange rate for GBP to USD
      },
      route,
      headers,
      data,
      icons,
      editedItem,
      dialog,
      closeModal,
      openModal,
      saveModal,
      changeStatus,
      simpleTableKey,
      errorMessages,
      getStatusIcon,
      isLoading,
      deleteItem,
      rules,
      form,
      tmpRole,
    };
  },
  computed: {
    servicesWithPrice() {
      return this.data.map((service) => {
        const exchangeRate = this.exchangeRates[this.selectedCurrency];
        const convertedPrice = service.price[0].value * exchangeRate;
        return {
          ...service,
         // price: service.price[0].value,
          price: convertedPrice.toFixed(2)
        };
      });
    },
  },
}
</script>

<style scoped>

</style>
