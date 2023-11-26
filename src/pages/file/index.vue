<script setup>
const fileInputRef = ref(null)

async function formData() {
  const data = new FormData()
  data.set('name', '光')
  data.set('age', 20)
  data.set('aaa', fileInputRef.value.files[0])

  const res = await axios.post('http://localhost:3000/aaa', data)
  console.log(res)
}

async function formData2() {
  const data = new FormData()
  data.set('name', '光')
  data.set('age', 20)
  ;[...fileInputRef.value.files].forEach((item) => {
    data.append('bbb', item)
  })
  //data.set('aaa', fileInputRef.value.files[0])
  console.log('11111')
  const res = await axios.post('http://localhost:3000/test', data)
  console.log(res)
}

// async function formData2() {
//   const data = new FormData()
//   data.set('name', '光')
//   data.set('age', 20)
//   ;[...fileInputRef.value.files].forEach((item) => {
//     data.append('bbb', item)
//   })

//   const res = await axios.post('http://localhost:3000/aaa', data, {
//     headers: { 'content-type': 'multipart/form-data' }
//   })
//   console.log(res)
// }

const handleFileInputChange = () => {
  console.log(fileInputRef.value.files)
  formData()
}

const test = async () => {
  console.log('11111')
  const res = await axios.post('http://localhost:3000', { data: '1111' })
  console.log(res)
}

const testGet = async () => {
  console.log('11111')
  const res = await axios.get('http://localhost:3000', { data: '1111' })
  console.log(res)
}

// fileInputRef.value.onchange = formData
</script>

<template>
  <div>
    <Button @click="testGet">测试get</Button>
    <Button @click="test">测试post</Button>
    <div>我是file</div>
    <input
      id="fileInput"
      type="file"
      multiple
      ref="fileInputRef"
      @change="handleFileInputChange"
    />
    <br />

    <!-- <div>我是多文件上传</div>
    <input
      id="fileInput"
      type="file"
      multiple
      ref="fileInputRef"
      @change="handleFileInputChange"
    /> -->
  </div>
</template>
