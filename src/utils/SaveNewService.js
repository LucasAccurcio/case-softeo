const saveNewService = (service) => {
  service = { ...service, totalValue: parseFloat(service.value).toFixed(2) };
  if (service.paymentMethod !== 'Cartão de crédito' || service.formOfPayment === 'À vista') {
    localStorage.setItem('service', JSON
    .stringify([...JSON.parse(localStorage.getItem('service')), service]));
  } else {
    let installment = service.formOfPayment.split('x', 1);
    installment = parseInt(installment[0]);

    let valueInstallment = (parseFloat(service.value) / installment).toFixed(2);
    service.value = valueInstallment;

    let date = service.paymentDate.split('-');
    let dateFirstPayment = new Date(date[0], date[1] - 1, date[2]);

    for (let i = 0; i < installment; i += 1) {
      service.paymentDate = dateFirstPayment.toLocaleDateString();
      
      localStorage.setItem('service', JSON
      .stringify([...JSON.parse(localStorage.getItem('service')), service]));
      
      const month = dateFirstPayment.getMonth();
      dateFirstPayment.setDate(dateFirstPayment.getDate() + 30);

      if (month === dateFirstPayment.getMonth()) {
        dateFirstPayment.setDate(dateFirstPayment.getDate() + 1);
      }
    }
  }
}

export default saveNewService;
