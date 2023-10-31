<template>
  <div>
    <label>{{task.options_json[0].show[user.lang]}}</label>
    <v-checkbox
      v-for="(option,optionIndex) in task.options_json[0].options"
      :key="optionIndex"
      v-model="taskModel[optionIndex]"
      :name="'task_o_'+index+'_'+optionIndex"
      :ref="'task_o_'+index+'_'+optionIndex"
      hide-details
      :label="option.show[user.lang]"
      :false-value="null"
      :true-value="option.show[user.lang]"
      dense
    ></v-checkbox>
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
      const checkboxes = ref([])
      const reStructureDataForBackend = () =>{
        let checkBoxTaskPreDefinedText = 'task_o_'
        Object.entries(taskModel.value).forEach(([key, value]) =>{
            checkboxes.value[checkBoxTaskPreDefinedText + props.index + '_' + '1' + '_' +key] = value
        })
      }
    return {
        taskModel,
        reStructureDataForBackend,
        required,
    }
  },
}
</script>
