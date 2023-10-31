<template>
  <div>
    <v-data-table
      ref="table"
      :key="tableKey"
      class="elevation-1"

      :headers="tableHeaders"
      :items="items"
      :page.sync="page"
      :server-items-length="totalItems"
      :options.sync="options"

      @page-count="pageCount = $event"

      hide-default-footer
      multi-sort

      :loading="isLoading"
      :loading-text="$t('loading')"
      :sort-by="sortColumn" :sort-desc="sortDesc"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{ $t(data[type].name) }}</v-toolbar-title>
          <v-select :items="[10, 20 , 50]" v-model="options.itemsPerPage" :disabled='isLoading' class="mx-4" style="max-width:60px" single-line hide-details></v-select>
          <v-divider inset vertical></v-divider>
          <v-tooltip top>
                 <template v-slot:activator="{ on, attrs }">
                   <v-icon  v-bind="attrs" v-on="on" class="ml-4"  @click="clearFilters">{{ icons.mdiFilterOffOutline }}</v-icon>
                 </template>
                 <span>{{$t('clear_all')}}</span>
               </v-tooltip>

          <v-spacer></v-spacer>
          <v-text-field
            v-if="enableSearch"
            v-model="search"
            :append-icon="getSearchIcon"
            @click:append="() => {
              search = '';
              getApiData(type, options, false)
            }"
            :label="$t('search')"
            :disabled='isLoading'
            single-line
            hide-details
            v-on:keyup.enter="getApiData(type, options, false)"
          ></v-text-field>
        </v-toolbar>
      </template>

<!--      <template  v-for="(headerItem, index) in headers" v-slot:[`header.${headerItem.value}`]="{header}" >-->
<!--        {{$t(header.text)}}-->
<!--      </template>-->
       <template v-for="(headerItem, index) in headers"  v-slot:[`item.${headerItem.value}`]="{item}">
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
      <template v-slot:body.append>
        <tr class="data-table-filter">
          <td v-for="(headerItem, index) in headers">
            <div style="display: flex">
              <v-text-field
                v-if="headerItem.customSearch != undefined && headerItem.customSearch == 'field'"
                type="text"
                :disabled='isLoading'
                v-model="filters[headerItem.value]"
                :label="$t(headerItem.text)"
                v-on:keyup.enter="getApiData(type,options,false)"
              ></v-text-field>
              <v-menu v-model="isDateMenuOpen" :close-on-content-click="false" transition="scale-transition" min-width="auto"
                      v-if="headerItem.customSearch != undefined && headerItem.customSearch == 'date'">
                <template v-slot:activator="{ on, attrs }" >
                  <v-text-field class="header-inputs flex-grow-0"  :prepend-icon="icons.mdiCalendar"  :label="$t(headerItem.text)" readonly
                       v-model="filters[headerItem.value]" v-bind="attrs" v-on="on"
                       :disabled='isLoading'
                  ></v-text-field>
                </template>
                <v-date-picker v-model="filters[headerItem.value]"
                               no-title
                               scrollable
                               @input="function(){
                                 getApiData(type,options,false);
                                 isDateMenuOpen = false
                               }">
                </v-date-picker>
              </v-menu>
              <v-select
                v-if="headerItem.customSearch != undefined && headerItem.customSearch == 'dropdown'"
                type="text"
                :disabled='isLoading'
                v-model="filters[headerItem.value]"
                v-on:change="getApiData(type,options,false)"
                :items="getSelectFilterItemsForField(headerItem.value,headerItem)"
                item-value="value"
                :item-text="(i) => {return $t(i.text)}"
                :label="$t('dropdown_filter')"
              ></v-select>
              <v-icon style="top: 30px" v-if="headerItem.customSearch != undefined && filters[headerItem.value] != null" v-on:click="
            function (){
             filters[headerItem.value] = null;
             getApiData(type,options,false)
            }" small>{{icons.mdiFilterOffOutline}}</v-icon>
            </div>
          </td>
        </tr>
      </template>

      <template v-slot:no-data>
        <div>
          {{ $t('no_data') }}
        </div>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :disabled="isLoading" :length="pageCount" :total-visible="7"></v-pagination>
    </div>
  </div>
</template>

<script>
import {ref, reactive, watch, onMounted, computed} from "@vue/composition-api";
import { useRouter } from '@core/utils';
import {
  mdiMagnify,
  mdiFilter,
  mdiSync,
  mdiCalendar,
  mdiFilterOffOutline,
} from '@mdi/js'
export default {
  name: "Table",
  props:['headers','dataObject','sortColumn','sortDesc','tableType','showSearch'],
  setup(props){
    const { route } = useRouter()
    const icons = ref({
      'mdiMagnify':mdiMagnify,
      'mdiFilter':mdiFilter,
      'mdiSync':mdiSync,
      'mdiFilterOffOutline':mdiFilterOffOutline,
      'mdiCalendar':mdiCalendar,
    });
    const tableKey = ref('init')
    const tmpHeaders = JSON.parse(JSON.stringify(props.headers))
    const type = ref('all')
    const enableSearch = ref(true)
    if(props.showSearch != undefined){
      enableSearch.value = props.showSearch
    }
    if(props.tableType){
        type.value = props.tableType
    }else{
        type.value = route.value.query.type == null ? 'all' : route.value.query.type
    }
      watch(() => user.lang, (newType, oldVal) => {
              tmpHeaders.forEach(item => {
                  item.newValue = Math.random()
              })
          }, {}
      )
    const tableHeaders = computed(() =>{
          props.headers.forEach((item,key) =>{
            tmpHeaders[key].text = i18n.t(item.text)
          })
          return tmpHeaders
      }
    )

    const data = ref(props.dataObject)
    const items = ref([])
    const options = ref({})
    const oldOptions = ref({})
    const isLoading = ref(false)
    const search = ref('')
    const page = ref(1)
    const pageCount = ref(0)
    const itemsPerPage = ref(10)
    const totalItems = ref(0)
    const filters = ref({})
    const isDateMenuOpen = ref(false)

    if(props.sortColumn){
      options.value = {
        page:1,
        itemsPerPage:10,
        sortBy: props.sortColumn,
        sortDesc: props.sortDesc,
      }
    }

    let tmpOptions = JSON.stringify(options.value)
    oldOptions.value = JSON.parse(tmpOptions)


    watch(() => options, (newOptions, oldVal) => {
        const watchProps = ['page', 'itemsPerPage', 'sortBy', 'sortDesc']
        let doCall = false;
        for (let i = 0; i < watchProps.length; i++) {
          if (oldOptions.value[watchProps[i]] !== newOptions.value[watchProps[i]]) {
            doCall = true
          }
        }
        if(doCall){
          let tmpOptions = JSON.stringify(newOptions.value)
          oldOptions.value = JSON.parse(tmpOptions)
          getApiData(type.value,newOptions.value,false)
        }
      },{deep:true,immediate:false}
    )
    // watch(() => route.value.query.type, (newType, oldVal) => {
    //     console.log('here')
    //     getApiData(newType,options.value)
    //   },{deep:true,immediate:false}
    // )


    // onMounted(() => {
      // getApiData(type.value,options.value)
    // })

    function getApiData(t,newOptions,checkTime = true){
      if(checkTime && !getTimeDiff(data.value[t])) {
        items.value = data.value[t].items;
        tableKey.value = Math.random();
        return;
      }
        isLoading.value = true;
        axios.post(data.value[t].path,{'status':data.value[t].status,'options':newOptions,'filters':filters.value,'search':search.value}).then(response =>{
          if(response.data.status == true){
            items.value = response.data.data
            data.value[t].items = response.data.data
            data.value[t].fetched = true
            data.value[t].last_fetch = new Date().getMinutes()+':'+new Date().getSeconds()
            totalItems.value = response.data.meta.total
          }
          isLoading.value = false;
        }).catch(error =>{isLoading.value = false;})
    }

    function getTimeDiff(dataType){
      if(dataType.last_fetch == null){
        return !dataType.fetched
      }else{
        let fetchedTime = dataType.last_fetch.split(':')
        if(fetchedTime[0] == new Date().getMinutes()){
          if(parseFloat(fetchedTime[1])+15 < new Date().getSeconds())
            return true;
        }else{
          return true;
        }
        return false;
      }
    }

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }

    // function  getSelectFilterItemsForField(field,headerItem){
    //   if(headerItem.fillDefault == true)
    //     return headerItem.filters // fills predefined filter from parent view(can be changed to api custom filter array)
    //   let uniqueFields = []
    //   this.dataObject[this.type].items.forEach((item)=>{
    //     uniqueFields.push(item[field])
    //   })
    //   return uniqueFields.filter(unique)//gets all unique elements from table
    // }

    function  getSelectFilterItemsForField(field,headerItem){
      if(headerItem.dropdownData == false){
        let uniqueFields = []
        props.dataObject[type.value].items.forEach((item)=>{
          uniqueFields.push(item[field])
        })
        return uniqueFields.filter(unique)//gets all unique elements from table
      }else{
        return headerItem.dropdownData // fills predefined filter from parent view(can be changed to api custom filter array)
      }
    }

    function clearFilters(){
      filters.value = {}
      search.value  = ''
      options.value = {page:1,itemsPerPage:10}
      // getApiData(type.value,options.value,false)
    }

      Echo.private(`tenant.${tenant_id}.datatable`)
        .listen('.DataTableEvent', (e)=>{
            getApiData(type.value,options.value, false)
        })


    return {
      tableHeaders,
      isLoading,
      options,
      data,
      type,
      icons,
      search,
      page,
      pageCount,
      itemsPerPage,
      filters,
      enableSearch,
      getSelectFilterItemsForField,
      totalItems,
      getApiData,
      isDateMenuOpen,
      clearFilters,
      tableKey,
      items
    }
  },
  methods:{

  },
  computed: {
    getSearchIcon(){
      if(this.search == ''){
        return this.icons.mdiMagnify
      }else{
        return this.icons.mdiFilterOffOutline
      }
    },
    formTitle () {
      return 'New Item'
    },
  }
}
</script>

<style scoped lang="scss">
.data-table-filter{
  display: none;
  @media (min-width: 576px) {
      display: revert;
  }
}
</style>
