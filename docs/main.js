'use strict';

(() => {
  window.addEventListener('load', (event) => {
    // update document content
    const setContent = (id, type) => {
      const value = eval(id);
      let text = 'Uh-oh!';
      switch (typeof value) {
        case 'string':
          if (type == 'ordinary') text = value;
          break;
        case 'number':
          if (type == 'ordinary') text = value;
          if (type == 'dollar') text = '$' + value.toFixed(2);
          if (type == 'percent') text = (value * 100).toFixed(2) + '%';
          break;
      }
      document.getElementById(id).textContent = text;
    };

    // ordinary values
    ['guestMessage', 'numberOfNights'].map((id) => setContent(id, 'ordinary'));

    // dollar values
    ['nightlyRate', 'subTotal', 'pstAmount', 'gstAmount', 'total'].map((id) =>
      setContent(id, 'dollar')
    );

    // percent values
    ['pstRate', 'gstRate'].map((id) => setContent(id, 'percent'));
  });
})();
