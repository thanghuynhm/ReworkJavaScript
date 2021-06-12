// document.querySelector('form').addEventListener('submit', e => {
//     e.preventDefault() // Ngăn khi submit load lại trang
//     const works = document.getElementById('name').value /// lấy value nhập vào input

//     const item = {
//         id : new Date().toISOString(),
//         works : works.trim()            /// Khai báo đối tượng
//     }
//     addItemtoUI(item) // Gọi Hàm
//     addItemtoLS(item)   // Gọi Hàm
//     document.getElementById('name').value = '' // Gán cho thuộc tính đó rỗng


// })

// // Thêm item vào localStorage

// const addItemtoLS =  (item) => {
//     const list = getList()
//     list.push(item)
//     localStorage.setItem('list', JSON.stringify(list))
// }

// // Thêm item vào list danh sách công việc vào giao diện

// const addItemtoUI = (item) => {
//     const card = document.createElement('div') // Trước khi thêm phải tạo ra 1 thẻ div để chứa
//     // Tạo ra 1 thẻ card có class như dưới
//     card.className = 'card p-2 flex-row justify-content-between align-items-center mb-3'
//     // In Ra màn hình người dùng
//     card.innerHTML = `  
//     <span>${item.works}</span> 
//     <button class="btn btn-sm btn-danger btn-remove" data-id="${item.id}">
//     Remove
//   </button>
//     `
//     document.querySelector('.list').appendChild(card)
// }

// const removeItemFromLS  = id => {
//     const list = getList()
//     const index = list.findIndex(item => item.id === id)
//     list.splice(index,1)
//     localStorage.setItem('list', JSON.stringify('list'))
// }

// // Xử lý sự kiện xóa 1 công việc

// document.querySelector('.list').addEventListener('click', e => {
//     if(e.target.classList.contains('btn-remove')){
//         const works = e.target.previousElementSibling.textContent

//         const isConfirmed = confirm(`Banj có muốn xóa item '${works}'`)
//         if (isConfirmed){
//             const card = e.target.parentElement
//             const id = e.target.dataset.id
//             // Xóa ngoài giao diện 
//             card.remove()
//             // Xóa trong localStorage
//             removeItemFromLS(id)
//         }
//     }
// })

// // Xử lý sự kiện Xóa tất cả các công việc 
// document.getElementById('btn-remove-all').addEventListener('click',() => {
//     const isConfirmed = confirm(`Bạn có muốn xóa tất cả item không`)
//     if(isConfirmed){
//         document.querySelector('.list').innerHTML = ''
//         localStorage.removeItem('list')
//     }
// })
// // Lọc công việc (Search)
// document.getElementById('filter').addEventListener('keyup', event => {
//     const value = event.target.value.trim()
//     const list = getList()
//     const filteredList = list.filter(item => {
//       return item.works.toLowerCase().includes(value.toLowerCase())
//     })
//     document.querySelector('.list').innerHTML = ''
//     filteredList.forEach(item => {
//       addItemToUI(item)
//     })
//   })
  
//   // Get List
//   const getList = () => {
//     return JSON.parse(localStorage.getItem('list')) || []
//   }
  
//   const init = () => {
//     const list = getList()
//     list.forEach(item => {
//       addItemToUI(item)
//     })
//   }
  
//   init()


// Submit
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
    const name = document.getElementById('name').value
    const item = {
      id: new Date().toISOString(),
      name: name.trim()
    }
    addItemToUI(item)
    addItemToLS(item)
    document.getElementById('name').value = ''
  })
  
  // Add to localstorage
  const addItemToLS = (item) => {
    const list = getList()
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
  }
  
  // Add to UI
  const addItemToUI = (item) => {
    const card = document.createElement('div')
    card.className =
      'card p-2 flex-row justify-content-between align-items-center mb-3'
    card.innerHTML = `
    <span>${item.name}</span>
    <button class="btn btn-sm btn-danger btn-remove" data-id="${item.id}">
      Remove
    </button>
    `
    document.querySelector('.list').appendChild(card)
  }
  
  // Remove item from Localstorage
  const removeItemFromLS = id => {
    const list = getList()
    const index = list.findIndex(item => item.id === id)
    list.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(list))
  }
  
  // Listen Remove
  document.querySelector('.list').addEventListener('click', event => {
    if(event.target.classList.contains('btn-remove')) {
      const name = event.target.previousElementSibling.textContent
      const isConfirmed = confirm(`Bạn có muốn xóa item '${name}'`)
      if(isConfirmed) {
        const card = event.target.parentElement
        const id = event.target.dataset.id
        // Remove from UI
        card.remove()
        // Remove from LS
        removeItemFromLS(id)
      }
    }
  })
  
  // Remove all
  document.getElementById('btn-remove-all').addEventListener('click', () => {
    const isConfirmed = confirm(`Bạn có muốn xóa tất cả item không`)
    if(isConfirmed) {
      document.querySelector('.list').innerHTML = ''
      localStorage.removeItem('list')
    }
  })
  
  // Filter
  document.getElementById('filter').addEventListener('keyup', event => {
    const value = event.target.value.trim()
    const list = getList()
    const filteredList = list.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase())
    })
    document.querySelector('.list').innerHTML = ''
    filteredList.forEach(item => {
      addItemToUI(item)
    })
  })
  
  // Get List
  const getList = () => {
    return JSON.parse(localStorage.getItem('list')) || []
  }
  
  const init = () => {
    const list = getList()
    list.forEach(item => {
      addItemToUI(item)
    })
  }
  
  init()