<template>
  <v-card id="account-setting-card">
    <!-- tabs -->
    <v-tabs v-model="tab" show-arrows>
      <v-tab v-for="(tab,index) in tabs" :key="index+'_'+tab.icon">
        <v-icon size="20" class="me-3">
          {{ tab.icon }}
        </v-icon>
        <span>{{ $t(tab.title) }}</span>
      </v-tab>
    </v-tabs>

    <!-- tabs item -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <account-settings-account></account-settings-account>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
    import {
        mdiAccountOutline,
        mdiLockOpenOutline,
        mdiDraw,
        mdiFolderStarMultipleOutline
    } from '@mdi/js'
    import {ref} from "@vue/composition-api/dist/vue-composition-api";

    import AccountSettingsAccount from './components/AccountSettingsAccount.vue'

    export default {
        name: "client-profile",
        components: {
            AccountSettingsAccount,
        },
        setup() {
            const tab = ref('')

            // tabs
            const tabs = [
                {title: 'profile', icon: mdiAccountOutline},
            ]

            return {
                tab,
                tabs,
                icons: {
                    mdiAccountOutline,
                    mdiLockOpenOutline,
                    mdiDraw,
                },
            }
        },
    }
</script>
