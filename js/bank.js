$(document).ready(function() {
    let account = []
    $("#frmBank").on('submit', (event) => {
        event.preventDefault();
        const accountNo = $("#accountNo").val();
        const customerName = $("#customerName").val();
        const accountType = $("#typeOfAccount").val();
        const tbAccount = $("#tbAccount");
        const isExist = account.filter(x => x.accountNo === accountNo);
        if(isExist.length > 0) return alert(`${accountNo} is already existed`)
        account.push({
            accountNo,
            customerName,
            accountType
        })
        tbAccount.append(`<tr> 
                            <td>${accountNo} | ${customerName} | ${accountType}</td> 
                          </tr>`)
    })
});