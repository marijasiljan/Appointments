<template>
  <div>
  <div style="margin: 10px 0">
    <label v-html="task.options_json[0].show[user.lang]"></label>
    <v-select
      :items="task.options_json[0].options"
      :item-text="'show['+user.lang+']'"
      :name="'task_o_'+index+'_1'"
      :ref="'task_o_'+index+'_1'"
      :item-value="'show['+user.lang+']'"
      v-model="taskModel[index]"
      outlined
      dense
      :rules="[required]"
    ></v-select>
  </div>


    <div v-for="(level1options,inputIndex) in task.options_json[0].options">
      <div v-if="level1options.type == 'one' && taskModel[index] == level1options.show[user.lang]">

        <div style="margin: 10px 0">
            <label v-html="level1options.show[user.lang]"></label>
            <v-text-field  :name="'task_o_c_'+index+'_'+(inputIndex+1)" :ref="'task_o_c_'+index+'_'+(inputIndex+1)" outlined dense
                          :rules="[required]" ></v-text-field>
        </div>
      </div>
      <div v-if="level1options.type == 'multiple' && taskModel[index] == level1options.show[user.lang]">
      <div v-for="level2options in level1options.options">
          <div  style="margin: 10px 0">
          <label v-html="level2options.show[user.lang]"></label>
            <v-text-field  :name="'task_o_c_s_'+index+'_'+(inputIndex+1)" :ref="'task_o_c_s_'+index+'_'+(inputIndex+1)"
            v-if="level2options.type == 'inputOnly'" outlined dense
                          :rules="[required]"></v-text-field>
          </div>
        </div>
      <div v-if="level1options.type=='select'" style="margin: 10px 0" >
        <label v-html="level1options.show[user.lang]"></label>
          <v-select
            v-if="level1options.options.length > 0"
            :name="'task_o_c_'+index+'_'+(inputIndex+1)"
            :ref="'task_o_c_'+index+'_'+(inputIndex+1)"
            :items="level1options.options"
            :item-text="'show['+user.lang+']'"
            :item-value="'show['+user.lang+']'"
            outlined
            dense
            :rules="[required]"
          ></v-select>
        </div>

      </div>
    </div>
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
      const selectData = ref([])
      const reStructureDataForBackend = () =>{
        let selectTaskPreDefinedText = 'task_o_'
        Object.entries(taskModel.value).forEach(([key, value]) =>{
          selectData.value[selectTaskPreDefinedText + props.index + '_' + '1'] = value
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
