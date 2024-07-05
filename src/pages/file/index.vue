<script setup></script>

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
