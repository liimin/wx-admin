<template>
  <d2-container>
    <template slot="header">Page 2 header</template>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="寺观名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="寺观类型">
        <el-radio-group v-model="form.type">
          <el-radio label="佛教" border size="medium"></el-radio>
          <el-radio label="道教" border size="medium"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="地区">
        <el-cascader :options="options" change-on-select size="medium"></el-cascader>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.addr"></el-input>
      </el-form-item>
      <el-form-item label="URL地址">
        <el-input v-model="form.url"></el-input>
      </el-form-item>
      <el-form-item label="寺观简介">
        <div ref="editor" style="text-align:left"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <template slot="footer">footer</template>
  </d2-container>
</template>

<script>
import E from 'wangeditor'
import districts from '@/assets/districts'
export default {
  name: 'editor',
  data() {
    return {
      editorContent: '',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
      ],
      selectedOptions: [],
      selectedOptions2: []
    }
  },
  methods: {
    getContent() {
      alert(this.editorContent)
    },
    handleSubmit() {

    },
    initDistricts() {
      const pro = districts[100000]
      let city, area
      const list = []
      for (const key in pro) {
        city = []
        for (const key1 in districts[key]) {
          area = []
          for (const key2 in districts[key1]) {
            area.push({ label: districts[key1][key2], value: key2 })
          }
          city.push({ label: districts[key][key1], value: key1, children: area })
        }
        list.push({ label: pro[key], value: key, children: city })
      }
      this.options = list
      console.table(list)
    },
    initEditor() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.uploadImgServer = '/upload'
      editor.customConfig.onchange = html => {
        this.editorContent = html
      }
      editor.create()
    }
  },
  mounted() {
    this.initEditor()
    this.initDistricts()
  }
}
</script>
<style lang="sass">
.w-e-menu
  z-index: 1001 !important
.w-e-text-container
  z-index :1000 !important
</style>

