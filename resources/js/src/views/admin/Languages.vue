<template>
    <div>
      <v-card>
        <v-card-title>
          <div class="text-h5" style="display: flex">
            {{ $t('variable') }}
            <div v-if="editedItem.id != 0">:
              {{ editedItem.variable }}
              <v-btn color="primary" x-small v-on:click="openModal('new')">
                <v-icon small color="white" >
                  {{ icons.mdiRefresh }}
                </v-icon>
              </v-btn>
            </div>
          </div>
        </v-card-title>

        <v-divider></v-divider>

        <v-form ref="form">
          <div style="max-height: 38vh;overflow: auto">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      :rules="[rules.required]"
                      :error-messages="errorMessages['variable'] ? errorMessages['variable'][0] : ''"
                      v-on:keyup="() => {errorMessages['variable'] ? errorMessages['variable'][0] = '' : null}"
                      v-on:keypress.enter="saveModal"
                      :placeholder="$t('variable')"
                      v-model="editedItem.variable" required></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <span>{{ $t('translation') }}</span>
                  </v-col>
                  <v-col cols="12" sm="6" md="6" v-for="lang in languages" :key="'inputs_'+lang">
                    <v-textarea
                      :rules="[rules.required]"
                      :error-messages="errorMessages[lang] ? errorMessages[lang][0] : ''"
                      v-on:keyup="() => {errorMessages[lang] ? errorMessages[lang][0] = '' : null}"
                      v-on:keypress.enter="saveModal"
                      v-model="editedItem[lang]" required :label="lang"></v-textarea>
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
            <v-btn color="primary" @click="saveModal">
              {{ $t('save') }}
            </v-btn>
          </v-card-actions>
        </v-form>

      </v-card>

      <br>

      <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers" :isLoading="isLoading" title="languages">

        <template v-slot:custom-variable="slotItems">
          {{slotItems.item.variable}}
        </template>

        <template v-slot:custom-actions="slotItems">
          <v-btn class="mr-1" v-on:click="deleteVariable(slotItems.item)" color="error" x-small>
            <v-icon small color="white">
              {{ icons.mdiDelete }}
            </v-icon>
          </v-btn>
          <v-btn class="mr-1" v-on:click="openModal(slotItems.item)" color="primary" x-small>
            <v-icon small color="white">
              {{ icons.mdiPencil }}
            </v-icon>
          </v-btn>
        </template>

        <template v-slot:add-button>
          <v-btn @click="generateLanguage()" class="ma-1"  color="primary" x-small >
            {{ $t('generate_language') }}
          </v-btn>
          <v-btn @click="syncLanguages()" class="ma-1"  color="primary" x-small >
            {{ $t('sync_languages') }}
          </v-btn>
        </template>
      </SimpleTable>
    </div>
</template>

<script>
import {ref,reactive, watch} from "@vue/composition-api";
import { required, integerValidator } from '@core/utils/validation'
import SimpleTable from "@/components/common/SimpleTable";
import { useRouter } from '@core/utils';
import {
  mdiPencil,
  mdiDelete,
  mdiEyeCheckOutline,
  mdiEyeOffOutline,
  mdiTrashCanOutline,
  mdiInboxMultipleOutline,
  mdiRefresh

} from '@mdi/js'
export default {
  name: "landlord-languages",
  components: {SimpleTable},
  setup(_,context){
    const { route } = useRouter()
    let icons = {
      mdiDelete,
      mdiPencil,
      mdiEyeCheckOutline,
      mdiEyeOffOutline,
      mdiTrashCanOutline,
      mdiInboxMultipleOutline,
      mdiRefresh
    }
    let path = '/languages'
    let rules = { required, integerValidator }
    const form = ref('')
    const simpleTableKey = ref('init')
    const errorMessages = ref([])
    const isLoading = ref(true)
    const dialog = ref(false)
    const data = ref([])
    const tmpItem = ref({})
    const headers = ref([])
    const editedItem = ref({})
    function standardModel() {
      return {id:0, name:languagesObject,isDoItYourself:0, status:1};
    }
    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'id',search: true},
      {text: 'variable', value: 'variable',customSlot:true,sortable: true,search:true},
      {text: 'en', value: 'en',sortable: false,search:true},
      {text: 'de', value: 'de',sortable: false,search:true},
      {text: 'it', value: 'it',sortable: false,search:true},
      {text: 'fr', value: 'fr',sortable: false,search:true},
      {text: 'actions', value: 'actions', sortable: false, customSlot:true,search:false}
    ]
    axios.get(path).then(response => {
      data.value = response.data.data
      isLoading.value = false
    }).catch(error => {isLoading.value = false})

    function openModal(item){
      if(item == 'new'){
        item = standardModel()
      }
      tmpItem.value = item;
      let tmp = JSON.stringify(item);
      editedItem.value = JSON.parse(tmp)
    }

    async function deleteVariable(item){
      if(await confirmAlert({'subtitle':'confirmation_delete_language'})) {
        axios.post(path+'/delete', {'id':item.id}).then(response => {
          if(response.data.status == true){
            data.value.splice(data.value.findIndex(i => i.id == item.id),1)
            flashMsg('success',response.data.message)
          }
        })
      }
    }

    function closeModal () {
      form.value.resetValidation()
      editedItem.value = {id:0, variable:null, en:null, de:null, it:null, fr:null, status:1}
    }

    function generateLanguage(){
      axios.post(path+'/generate').then(res => {
        if(res.data.status == true){
          flashMsg('success',res.data.message)
        }
      })
    }
    function syncLanguages(){
      axios.get(path+'/languages_sync').then(res => {
        if(res.data.status == true){
          flashMsg('success',res.data.message)
        }
      })
    }

    function saveModal(){
      if(context.refs['form'].validate()){
        isLoading.value = true
        axios.post(path+'/store',editedItem.value).then(response => {
          if(response.data.status == true){
            if(response.data.meta.updated == false){
              data.value.push(response.data.data)
            }else{
              data.value[data.value.findIndex(item => item.id == editedItem.value.id)] = response.data.data
            }
            simpleTableKey.value = Math.random();
            errorMessages.value = []
            closeModal()
          }
          isLoading.value = false
        }).catch(error => {
          if(error.response.status == 422){
            errorMessages.value = error.response.data.errors
          }
          isLoading.value = false
        })
      }
    }

    return {
      form,
      rules,
      route,
      headers,
      data,
      icons,
      editedItem,
      dialog,
      closeModal,
      openModal,
      saveModal,
      generateLanguage,
      syncLanguages,
      deleteVariable,
      simpleTableKey,
      errorMessages,
      isLoading,
      breadcrumbsItems:[
        {text: 'dashboard', disabled: false, link: { name:'landlord-dashboard'}, icon:'mdiHomeOutline'},
        {text: 'languages', disabled: true, link: null}
      ]
    }
  }
}


</script>

<style scoped>

</style>
