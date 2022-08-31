const saveNewService = (service) => {
  if (service.paymentMethod !== 'Cartão de crédito' || service.formOfPayment === 'À vista') {
    localStorage.setItem('service', JSON
    .stringify([...JSON.parse(localStorage.getItem('service')), service]));
  } else {
    let installment = service.formOfPayment.split('x', 1);
    installment = parseInt(installment[0]);

    let valueInstallment = service.value / installment;
    service.value = valueInstallment;

    let dateFirstPayment = new Date(service.paymentDate);

    for (let i = 0; i < installment; i += 1) {
      service.paymentDate = dateFirstPayment.toLocaleDateString();
      localStorage.setItem('service', JSON
      .stringify([...JSON.parse(localStorage.getItem('service')), service]));
      dateFirstPayment.setDate(dateFirstPayment.getDate() + 30);
    }
  }
}

export default saveNewService;