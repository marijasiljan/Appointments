<template xmlns="http://www.w3.org/1999/html">
  <div>
    <Table :dataObject="activityTypes" :headers="headers" :sortColumn="['id']" :sortDesc="[true]" :showSearch="true">
      <template v-slot:custom-activity="slotItems">
        {{$t(slotItems.item.activity) }}
      </template>
      <template v-slot:custom-type="slotItems">
        <span v-if="slotItems.item.activity == 'login'">{{$t('user')}}</span>
        <span v-else>
          <span v-if="slotItems.item.document">
              {{ $t('document')}}
          </span>
          <span v-if="slotItems.item.invoice">
              {{ $t('invoice')}}
          </span>
          <span v-if="slotItems.item.offer">
              {{ $t('offer')}}
          </span>
        </span>
      </template>
      <template v-slot:custom-file="slotItems">
        <span v-if="slotItems.item.activity == 'login'"></span>
        <span v-else>
          <span v-if="slotItems.item.document">
            <span role="button" @click="viewDocument(slotItems.item.document.file)">
              {{slotItems.item.document.description }}
            </span>
          </span>
          <span v-if="slotItems.item.invoice">
            <span role="button" @click="viewDocument(slotItems.item.invoice.link_open)">
             R{{slotItems.item.invoice.invoice_nr}}
            </span>
          </span>
          <span v-if="slotItems.item.offer">
            <span role="button" @click="viewDocument(slotItems.item.offer.link_open)">
             O{{slotItems.item.offer.offer_nr}}
            </span>
          </span>
        </span>
      </template>
      <template v-slot:custom-date="slotItems">
        {{ moment(slotItems.item.created_at).format('DD.MM.YYYY HH:mm')}}
      </template>
    </Table>
  </div>
</template>

<script>

    import {ref} from "@vue/composition-api";
    import {required, integerValidator} from '@core/utils/validation'
    import Table from "@/components/common/Table";
    import moment from 'moment'
    import {useRouter} from '@core/utils';
    import {
        mdiPencil,
        mdiDelete,
        mdiEyeCheckOutline,
        mdiTrashCanOutline,
        mdiEyeOffOutline,
        mdiPlusThick

    } from '@mdi/js'

    export default {
        name: "admin-user-activities",
        components: {Table},
        setup(_, context) {
            const {route} = useRouter()
            let icons = {
                mdiDelete,
                mdiPencil,
                mdiEyeCheckOutline,
                mdiTrashCanOutline,
                mdiEyeOffOutline,
                mdiPlusThick
            }
            let path = '/' + user.role + '/user/'+ context.root.$route.params.id+'/activity'
            let rules = {required, integerValidator}
            const simpleTableKey = ref('init')
            const isLoading = ref(true)
            const headers = ref([])
            let data = []
            data['all'] = {
              'path':path,
              'name':'activities',
              'items':[],
              'status':[],
              'fetched':false,
              'last_fetch':null
            };
            const activityTypes = ref(data)


            headers.value = [
                {text: 'id', align: 'start', value: 'id', search: true},
                {text: 'activity', value: 'activity', customSlot: true, sortable: false, search: true},
                {text: 'type', value: 'type', customSlot: true, sortable: false, search: true},
                {text: 'file', value: 'file', customSlot: true, sortable: false, search: true},
                {text: 'date', value: 'date', customSlot: true, sortable: true, search: true},
            ]

            const viewDocument = (link) =>{
                window.open(link + '?api_token=' + token, '_blank');
            }

            return {
                viewDocument,
                moment,
                isLoading,
                rules,
                route,
                headers,
                activityTypes,
                icons,
                simpleTableKey,
            }
        }
    }
</script>

<style scoped>

</style>
