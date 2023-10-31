<template xmlns="http://www.w3.org/1999/html">
  <div>
    <Table :dataObject="activityTypes" :headers="headers" :sortColumn="['id']" :sortDesc="[true]" :showSearch="true">
      <template v-slot:custom-user="slotItems">
        <user-profile-image :tmp-user="slotItems.item.user" :type="2"></user-profile-image>
      </template>
      <template v-slot:custom-activity="slotItems">
        {{$t(slotItems.item.activity) }}
      </template>
      <template v-slot:custom-model="slotItems">
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
      <template v-slot:custom-created_at="slotItems">
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
    import UserProfileImage from "../../../../components/common/UserProfileImage";

    export default {
        name: "admin-users-activities",
        components: {UserProfileImage, Table},
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
            let path = '/' + user.role + '/users/activities'
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
                {text: 'user', align: 'start', value: 'user',customSlot: true, search: true},
                {text: 'activity', value: 'activity', customSlot: true, sortable: false, search: true},
                {text: 'type', value: 'model',customSlot:true,search: true,
                  customSearch:'dropdown',
                  dropdownData:[
                    {'value':'User','text':'login'},
                    {'value':'Document','text':'document'},
                    {'value':'Offer','text':'offer'},
                    {'value':'Invoice','text':'invoice'},
                  ] },
                {text: 'file', value: 'file', customSlot: true, sortable: false, search: true},
                {text: 'date', value: 'created_at',customSearch:'date', customSlot: true, sortable: true, search: true},
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
