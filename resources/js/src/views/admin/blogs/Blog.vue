<template xmlns="http://www.w3.org/1999/html">
  <div>
    <SimpleTable ref="simpleTable" :key="simpleTableKey" :items="data" :headers="headers" :isLoading="isLoading" title="news">
      <template v-slot:custom-title="slotItems">
        {{ slotItems.item.title[user.lang] }}
      </template>
      <template v-slot:custom-text="slotItems">
        {{ slotItems.item.text[user.lang] }}
      </template>
      <template v-slot:custom-gif="slotItems">
        <img style="width: 100px" v-if="slotItems.item.gif" :src="slotItems.item.gif+'?api_token='+ token" alt="" />
      </template>
      <template v-slot:custom-actions="slotItems">
        <v-btn class="mr-1" v-on:click="openModal(slotItems.item)" color="primary" x-small>
          <v-icon small color="white" >
            {{ icons.mdiPencil }}
          </v-icon>
        </v-btn>
        <v-btn class="mr-1" v-on:click="deleteItem(slotItems.item)" color="error" x-small>
          <v-icon small color="white" >
            {{ icons.mdiTrashCanOutline }}
          </v-icon>
        </v-btn>
      </template>

      <template v-slot:add-button>
        <v-dialog v-model="dialog" max-width="750px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" x-small dark v-bind="attrs" v-on="on" v-on:click="openModal('new')">
              <v-icon small color="white" >
                {{ icons.mdiPlusThick }}
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ $t('news') }} <span v-if="editedItem.id">: {{ editedItem.title[user.lang] }}</span></span>
            </v-card-title>

            <v-divider></v-divider>

            <v-form ref="form">
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <span>{{$t('title')}}</span>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-for="lang in languages" :key="'inputs_'+lang">
                      <v-text-field
                        :rules="[rules.required]"
                        :error-messages="errorMessages['title.'+lang] ? errorMessages['title.'+lang][0].replace('title.'+lang,$t('title')) : ''"
                        v-on:keyup="() => {errorMessages['title.'+lang] ? errorMessages['title.'+lang][0] = '' : null}"
                        v-on:keypress.enter="saveModal"
                        v-model="editedItem.title[lang]" required :label="lang"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <span>{{$t('text')}}</span>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" v-for="lang in languages" :key="'inputs2_'+lang">
                      <v-textarea
                        outlined
                        :rules="[rules.required]"
                        :error-messages="errorMessages['text.'+lang] ? errorMessages['text.'+lang][0].replace('text.'+lang,$t('text')) : ''"
                        v-on:keyup="() => {errorMessages['text.'+lang] ? errorMessages['text.'+lang][0] = '' : null}"
                        v-model="editedItem.text[lang]" required :label="lang"></v-textarea>
                    </v-col>

                    <v-col cols="12">
                      <v-file-input show-size ref="file" accept="image/*" :label="$t('file_input')"></v-file-input>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <label  for="blog_is_company">{{$t('blog_is_company')}}</label>
                      <v-switch id="blog_is_company" v-model="editedItem.isCompany" inset :true-value="1" :false-value="0"></v-switch>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <label  for="blog_is_client">{{$t('blog_is_client')}}</label>
                      <v-switch id="blog_is_client" v-model="editedItem.isClient" inset :true-value="1" :false-value="0"></v-switch>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

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
        </v-dialog>
      </template>
    </SimpleTable>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import { required, integerValidator } from '@core/utils/validation'
import SimpleTable from "@/components/common/SimpleTable";
import { useRouter } from '@core/utils';
import {
  mdiPencil,
  mdiDelete,
  mdiEyeCheckOutline,
  mdiTrashCanOutline,
  mdiEyeOffOutline,
  mdiPlusThick

} from '@mdi/js'
export default {
  name: "admin-blogs",
  components: {SimpleTable},
  setup(_,context){
    const { route } = useRouter()
    let icons = {
      mdiDelete,
      mdiPencil,
      mdiEyeCheckOutline,
      mdiTrashCanOutline,
      mdiEyeOffOutline,
      mdiPlusThick
    }
    let path = '/'+user.role+'/blogs'
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
      return {id:0, title:languagesObject, text:languagesObject,isCompany:0,isClient:0,status:1};
    }
    editedItem.value = standardModel()

    headers.value = [
      {text: 'id', align: 'start', value: 'id',search: true},
      {text: 'title', value: 'title',customSlot: true,sortable: false,search:true},
      {text: 'text', value: 'text',customSlot: true,sortable: false,search:true},
      {text: 'gif', value: 'gif',customSlot: true,sortable: false,search:false},
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
      dialog.value = true;
    }

    function closeModal () {
      form.value.resetValidation()
      dialog.value = false
      editedItem.value = standardModel()
    }

    function saveModal(){
      if(context.refs['form'].validate()){
        let file = context.refs.file.$refs.input.files[0]
        let fd = new FormData();
        fd.append("gif", file);
        fd.append("id", editedItem.value.id);
        fd.append("title", JSON.stringify(editedItem.value.title));
        fd.append("text", JSON.stringify(editedItem.value.text));
        fd.append("isCompany", editedItem.value.isCompany);
        fd.append("isClient", editedItem.value.isClient);
        fd.append("status", editedItem.value.status);
        isLoading.value = true
        axios.post(path+'/store',fd).then(response => {
          if(response.data.status == true){
            if(response.data.meta.created){
              data.value.unshift(response.data.data)
            }else{
              data.value[data.value.indexOf(tmpItem.value)] = response.data.data
            }
            simpleTableKey.value = Math.random();
            errorMessages.value = []
            dialog.value = false
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


    async function deleteItem (item) {
      if(await confirmAlert({'subtitle':'confirmation_blogs_delete'})){
        isLoading.value = true
        axios.put(path+'/delete', {'id':item.id}).then(response => {
          if(response.data.status){
            let checkItem = data.value.filter(i => i.id == item.id)
            data.value.splice(data.value.indexOf(checkItem[0]),1);
          }
          isLoading.value = false
        }).catch(error => {
          if(error.response.status == 422){
            flashMsg('error',error.response.data.message)
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
      simpleTableKey,
      errorMessages,
      isLoading,
      deleteItem,
    }
  }
}
</script>

<style scoped>

</style>
