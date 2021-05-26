const handlePeriod = (period, dateString, months) => {
    if(months === 0) {
      const currentDate = new Date(dateString) // tạo ngày hiện tại
      period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`) /// Push vào mảng thời gian
    } else {
      const pre = new Date(dateString)
      let months= pre.getMonth() + 2,
        year = pre.getFullYear(),
        date = pre.getDate()
      if(months > 12) {
        months = 1
        year +=1
      }
      const currentDate = new Date(`${year}-${months}-${date}`)
      period.push(
        `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`
      )
    }
    return period[months]
  }

document.querySelector('form').addEventListener(('submit'), event => {

    event.preventDefault()
    document.querySelector('table tbody').innerHTML = ''

    const loan = Number(document.getElementById('loan').value) 
    const months = Number(document.getElementById('months').value) 
    const rate = Number(document.getElementById('rate').value) 
    const date = (document.getElementById('date').value) 

    const interest = Math.round((loan * months * rate)/1200)
    const moneypay = loan + interest

    document.getElementById('interest').value =  interest.toLocaleString()
    document.getElementById('moneypay').value = moneypay.toLocaleString() 
    const period = []
    for (let i = 0; i <= months; i++){
        let html

        if(i === 0){
            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, date, i)}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            `
        }else if(i === months){
            //gốc hàng tháng
            const gocHangThang = loan - Math.round(loan/months)*(months -1)

            // Lãi Hàng Tháng 
            const laiHangThang = interest - Math.round((loan*rate)/1200)*(months-1)

            // gốc và lãi hàng tháng

            const gocLaiHangThang = gocHangThang + laiHangThang

            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, period[i-1], i)}</td>
            <td>${gocHangThang.toLocaleString()}</td>
            <td>${laiHangThang.toLocaleString()}</td>
            <td>${gocLaiHangThang.toLocaleString()}</td>
            <td>0</td>
            `
        }else{
            const gocHangThang = Math.round(loan/months)

            const laiHangThang = Math.round((loan*rate)/1200)

            const gocLaiHangThang = gocHangThang + laiHangThang

            const soGocConLai = loan - gocHangThang*i

            
            html = `
            <td>${i}</td>
            <td>${handlePeriod(period, period[i-1], i)}</td>
            <td>${gocHangThang.toLocaleString()}</td>
            <td>${laiHangThang.toLocaleString()}</td>
            <td>${gocLaiHangThang.toLocaleString()}</td>
            <td>${soGocConLai.toLocaleString()}</td>
            `
            
        }
        const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
    }

})