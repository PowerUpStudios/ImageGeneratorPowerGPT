PGPTConversation.onMessage((msg) => {
  const ics = msg.container.getElementsByTagName("imgen-c")
  for (let ic = 0; ic < ics.length; ic++) {
    if (ics[ic].getAttribute("keyword")) {
      fetch("https://server.powerupstudio.eu/access", {headers: {"x-access-url": `https://en.wikipedia.org/w/api.php?action=query&titles=${ics[ic].getAttribute("keyword")}&prop=pageimages&format=json&pithumbsize=100`}}).then(res => res.json()).then((res) => {
          let url = res.res.query.pages[Object.keys(res.res.query.pages)[0]].thumbnail
          ics[ic].outerHTML = `<img src="${url}></img>`
        })
    }
  }
  msg.contentChanged(null, () => {
    const ics = msg.container.getElementsByTagName("imgen-c")
    for (let ic = 0; ic < ics.length; ic++) {
      if (ics[ic].getAttribute("keyword")) {
        fetch("https://server.powerupstudio.eu/access", {headers: {"x-access-url": `https://en.wikipedia.org/w/api.php?action=query&titles=${ics[ic].getAttribute("keyword")}&prop=pageimages&format=json&pithumbsize=100`}}).then(res => res.json()).then((res) => {
          let url = res.res.query.pages[Object.keys(res.res.query.pages)[0]].thumbnail
          ics[ic].outerHTML = `<img src="${url}></img>`
        })
      }
    }
  })
}, window.parent.document)
