<template>
  <div>
    <v-data-table :headers="tableHeaders" :items="filteredItems" :sort-by="sortColumn" :sort-desc="sortDesc" class="elevation-1"
                  :loading="isLoading"
                  :loading-text="$t('loading')"
                  :page.sync="page"
                  @page-count="pageCount = $event">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ $t(title) }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            v-on:keyup="customSearch"
            :append-icon="icons.mdiMagnify"
            :label="$t('search')"
            single-line
            hide-details
          ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>
          <slot name="add-button" class="ml-2"></slot>
        </v-toolbar>
      </template>
      <template  v-for="headerItem in headers" v-slot:[`header.${headerItem.value}`]="{header}" >
        {{header.text}}
      </template>
      <template v-for="(headerItem, index) in headers"  v-slot:[`item.${headerItem.value}`]="{item}"  >
        <div v-if="headerItem.isRelation == undefined && headerItem.customSlot == undefined">
          <span v-if="headerItem.value.includes('.') && item[headerItem.value.split('.')[0]] != null">
            {{$t(item[headerItem.value.split('.')[0]][headerItem.value.split('.')[1]])}}
          </span>
          <span v-else>
              {{ item[headerItem.value] }}
          </span>
        </div>

        <span v-for="field in headerItem.isRelation" v-if="headerItem.isRelation != undefined">
           {{ item[headerItem.value][field]}}
         </span>

        <slot :name="'custom-'+headerItem.value" v-bind:item="item" v-if="headerItem.customSlot != undefined"></slot>
      </template>
      <template v-slot:no-data>
        <div>
          {{ $t('no_data') }}
        </div>
      </template>
    </v-data-table>
    <div class="text-center">
      <v-text-field v-model="page" :label="$t('page')" type="number" min="0" :max="pageCount" style="width: 6%;padding-left:10px;position:absolute"></v-text-field>
      <v-pagination v-model="page" :length="pageCount" :total-visible="10"></v-pagination>
    </div>
  </div>
</template>

<script>
import {ref, reactive, watch, onUpdated,onMounted, computed} from "@vue/composition-api";
import { useRouter } from '@core/utils';
import {mdiMagnify, mdiFilter, mdiSync, mdiCalendar, mdiFilterOffOutline,} from '@mdi/js'
export default {
  name: "SimpleTable",
  props:['items','headers','title','isLoading','sortColumn','sortDesc'],
  setup(props){
    const search = ref('')
    const headers = ref([])
    const items = ref([])
    const page = ref(1)
    const pageCount = ref(1)
    const itemsPerPage = ref(1)
    const filteredItems = ref([])
    const tmpHeaders = JSON.parse(JSON.stringify(props.headers))

    watch(() => props,
      (newProps, oldOptions) => {
        items.value = newProps.items
        headers.value = newProps.headers
        filteredItems.value = newProps.items
      },{deep:true,immediate:true}
    )
      watch(() => user.lang, (newType, oldVal) => {
              tmpHeaders.forEach(item => {
                  item.newValue = Math.random()
              })
          }, {}
      )
      const tableHeaders = computed(() => {
              props.headers.forEach((item, key) => {
                  tmpHeaders[key].text = i18n.t(item.text)
              })
              return tmpHeaders
          }
      )
    // onMounted(() => {
    //   if(localStorage.getItem('page') != undefined){
    //     page.value = parseInt(localStorage.getItem('page'))
    //   }
    // })
    // onUpdated(() => {
    //   localStorage.setItem('page',page.value)
    // })

    function customSearch(){
      if(search.value.length > 0){
        let mergedUniqueArrays = [];
        headers.value.forEach((header)=>{
          let filteredArrays = [];
          filteredArrays = items.value.filter((item) => {

            let stringifiedValue = JSON.stringify(item[header.value])
            if(header.value.includes('.')){
              let complexHeader = header.value.split('.')
              stringifiedValue = JSON.stringify(item[complexHeader[0]][complexHeader[1]])
            }
            if(header.value == 'street'){
              stringifiedValue = JSON.stringify(item['street']+item['street_nr']+item['zip']+item['city'])
            }
            if(header.search == true){
              if(stringifiedValue != undefined)
                return stringifiedValue.toLowerCase().includes(search.value.toLowerCase());
            }
          })
          mergedUniqueArrays = mergedUniqueArrays.concat(filteredArrays);
        })
        filteredItems.value = mergedUniqueArrays.filter((item, pos) => mergedUniqueArrays.indexOf(item) === pos)
      }else{
        filteredItems.value = items.value
      }
    }

    const icons = ref([mdiMagnify])
    return{
      tableHeaders,
      search,
      page,
      pageCount,
      itemsPerPage,
      customSearch,
      filteredItems,
      icons,
    }
  },
}
</script>

<style scoped>

</style>
