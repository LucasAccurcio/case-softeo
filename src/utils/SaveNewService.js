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
