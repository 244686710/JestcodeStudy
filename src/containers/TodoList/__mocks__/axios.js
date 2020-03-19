const undoList = {
  success: true,
  data: [
    {
      status: 'div',
      value: 'Yu yd'
    },
    {
      status: 'div',
      value: 'Yu yx'
    },
    {
      status: 'div',
      value: 'Yu kf'
    }
  ]
}
export default {
  get (url) {
    if (url === '/getUndolist.json') {
      return new Promise((resolve) => {
        resolve(undoList)
      })
    }
  }
}
