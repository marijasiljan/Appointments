<template>
  <div class="mb-4" style="margin: 10px 0">
    <label v-html="task.options_json[0].show[user.lang]"></label>
    <v-text-field :name="'task_o_'+index+'_1'"
                  :ref="'task_o_'+index+'_1'"
                  v-model="taskModel[index]"
                  hide-details
                  outlined
                  dense
                  :rules="[required]">
    </v-text-field>
  </div>
</template>

<script>

import {ref} from "@vue/composition-api";
import { required } from '@core/utils/validation'
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const taskModel = ref({})
    const inputs = ref([])
    const reStructureDataForBackend = () =>{
      let inputsTaskPreDefinedText = 'task_o_'
      Object.entries(taskModel.value).forEach(([key, value]) =>{
        inputs.value[inputsTaskPreDefinedText + props.index + '_1'] = value
      })
    }
    return {
      taskModel,
      reStructureDataForBackend,
      required
    }
  },
}
</script>
