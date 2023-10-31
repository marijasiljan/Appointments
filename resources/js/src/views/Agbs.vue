<template>
  <!--    notes modal-->
      <v-dialog
         v-model="isAgbsDialogVisible"
         width="500"
         @click:outside="cancel"
       >

         <v-card>
           <v-card-title>
             Vertragsbestandteile
           </v-card-title>

           <v-card-text>
             <p><br><br>

             •	Arbeitsausführung gemäss Leistungsbeschrieb<br>
             •	Offertsumme aufgrund digitaler Offerte mit detaillierter Aufstellung zzgl. der zum Zeitpunkt der Leistungserbringung gültigen, gesetzlichen Mehrwertsteuer<br>
             •	Garantie 2 Jahre ab Rechnungsdatum gemäss Norm SIA118<br>
             •	Ausführungstermin nach Absprache <br>
             •	Zahlungskondition: 	10 Tage netto<br>
             •	Materialbestellungen werden erst nach Auftragserteilung ausgeführt<br>
             •	Unvorhergesehene und zusätzliche Arbeiten, welche Mehrkosten verursachen, werden erst nach Freigabe der Bauherrschaft ausgeführt<br>
             •	Es gelten die <a target="_blank" :href="agb_link">AGBs</a> von {{ name }}<br>
             </p>
           </v-card-text>

           <v-card-actions>
             <v-spacer></v-spacer>
             <v-btn color="secondary" @click="cancel">{{$t('cancel')}}</v-btn>
           </v-card-actions>
         </v-card>
       </v-dialog>
</template>

<script>

import { ref } from '@vue/composition-api'
import ThemeConfig from '@themeConfig'
export default {
  props: {
        isAgbsDialogVisible: {
      type: Boolean,
      required: true,
    },
  },

setup(props,context) {
    const cancel = () =>{
        context.emit('cancelModal',false)
    }

    return {
        cancel,
        name: ThemeConfig.app.name,
        agb_link: ThemeConfig.app.agb_link,
    }
  },
}
</script>

<style lang="scss" scoped>
.project-progress {
  min-width: 4rem;
}
.justify-content-end{
  justify-content:end
}
</style>
