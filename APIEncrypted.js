(function () {
  const _0x3f07b0 = [
    'command-r',
    'QU97ZuWEVsxNAsPBB39RB5VC5wkaq7YmWw1z2d5k',
    'https://api.cohere.ai/v1/chat',
    'value',
    'getElementById',
    'textContent',
    '⏳ Sedang memproses...',
    'POST',
    'Bearer ',
    'application/json',
    'message',
    'model',
    'kirimPesan',
    '❌ Error: '
  ];

  const _API_KEY = _0x3f07b0[1];
  const _API_URL = _0x3f07b0[2];
  const _MODEL = _0x3f07b0[0];

  window[_0x3f07b0[12]] = async function () {
    const _input = document[_0x3f07b0[4]]('userInput')[_0x3f07b0[3]];
    const _output = document[_0x3f07b0[4]]('hasil');
    _output[_0x3f07b0[5]] = _0x3f07b0[6];

    try {
      const _response = await fetch(_API_URL, {
        method: _0x3f07b0[7],
        headers: {
          Authorization: _0x3f07b0[8] + _API_KEY,
          'Content-Type': _0x3f07b0[9]
        },
        body: JSON.stringify({
          [_0x3f07b0[11]]: _MODEL,
          [_0x3f07b0[10]]: _input
        })
      });

      const _data = await _response.json();
      _output[_0x3f07b0[5]] = JSON.stringify(_data, null, 2);
    } catch (_err) {
      _output[_0x3f07b0[5]] = _0x3f07b0[13] + _err.message;
    }
  };
})();