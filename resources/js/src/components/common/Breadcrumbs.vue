<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item @click="openLink(item)" :disabled="item.disabled" role="button">
        <v-icon v-if="item.icon">{{icons[item.icon]}}</v-icon>
        {{ $t(item.text) }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>

    import { mdiHomeOutline } from '@mdi/js'
export default {
  props:{
    items:{
      type:Array,
      required:true
    }
  },
  name: "Breadcrumbs",
  setup(props){
      const openLink = (item) =>{
        router.push(item.link)
      }
    return {
        openLink,
        icons:{
            mdiHomeOutline
        }
    }
  },
}
</script>

<style scoped>

</style>
