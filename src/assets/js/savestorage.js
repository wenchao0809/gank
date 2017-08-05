const savestorage = {
  save (data) {
    let date = (new Date()).toISOString().split('T')[0]
    let collectionGan = {}
    if (!window.localStorage.collectionGan) {
      collectionGan[date] = [data]
      window.localStorage.collectionGan = JSON.stringify(collectionGan)
    } else {
      collectionGan = JSON.parse(window.localStorage.collectionGan)
      if (!collectionGan[date]) {
        collectionGan[date] = [data]
        window.localStorage.collectionGan = JSON.stringify(collectionGan)
      } else {
        collectionGan[date].push(data)
        window.localStorage.collectionGan = JSON.stringify(collectionGan)
      }
    }
  },
  load () {
    if (window.localStorage.collectionGan) {
      return JSON.parse(window.localStorage.collectionGan)
    } else {
      return null
    }
  },
  clear () {
    if (window.localStorage.collectionGan) {
      window.localStorage.removeItem('collectionGan')
    }
  }
}

export default savestorage
