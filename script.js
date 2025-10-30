const BGN_TO_EUR = 1.95583;

function convertToEUR() {
  const bgn = parseFloat(document.getElementById("amountBGN").value);
  if (!isNaN(bgn)) {
    document.getElementById("amountEUR").value = (bgn / BGN_TO_EUR).toFixed(2);
  } else {
    document.getElementById("amountEUR").value = "";
  }
}

function calculateVAT() {
  const amountBGN = parseFloat(document.getElementById('amountBGN').value);
  const amountEUR = parseFloat(document.getElementById('amountEUR').value);
  const vatRate = parseFloat(document.getElementById('vatRate').value);
  const vatType = document.getElementById('vatType').value;

  if (isNaN(amountBGN) || isNaN(amountEUR) || isNaN(vatRate)) {
    alert("Моля, въведете валидни стойности.");
    return;
  }

  let netBGN, grossBGN, vatBGN;
  let netEUR, grossEUR, vatEUR;

  if (vatType === "with") {
    grossBGN = amountBGN;
    netBGN = grossBGN / (1 + vatRate / 100);
    vatBGN = grossBGN - netBGN;

    grossEUR = amountEUR;
    netEUR = grossEUR / (1 + vatRate / 100);
    vatEUR = grossEUR - netEUR;
  } else {
    netBGN = amountBGN;
    vatBGN = netBGN * (vatRate / 100);
    grossBGN = netBGN + vatBGN;

    netEUR = amountEUR;
    vatEUR = netEUR * (vatRate / 100);
    grossEUR = netEUR + vatEUR;
  }

  document.getElementById('netAmount').textContent = `${netBGN.toFixed(2)} лв / ${netEUR.toFixed(2)} €`;
  document.getElementById('grossAmount').textContent = `${grossBGN.toFixed(2)} лв / ${grossEUR.toFixed(2)} €`;
  document.getElementById('vatAmount').textContent = `${vatBGN.toFixed(2)} лв / ${vatEUR.toFixed(2)} €`;

  document.getElementById('netAmount').style.visibility = "visible";
  document.getElementById('grossAmount').style.visibility = "visible";
  document.getElementById('vatAmount').style.visibility = "visible";
}


function clearFields() {
  document.getElementById('amountBGN').value = '';
  document.getElementById('amountEUR').value = '';
  document.getElementById('vatRate').value = '';
  document.getElementById('netAmount').textContent = '-';
  document.getElementById('grossAmount').textContent = '-';
  document.getElementById('vatAmount').textContent = '-';
}
