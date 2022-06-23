const initImgViewer = function (id) {
  const Elm = document.getElementById(id)
  if (!Elm) {
    throw new Error('创建图片预览容器失败，未指定 容器id !')
  }
  try {
    return new Viewer(Elm)
  } catch {
    throw new Error('创建图片预览容器失败，请检查是否正确引用了 Viewer 库!')
  }
}

export default {
  initImgViewer
}