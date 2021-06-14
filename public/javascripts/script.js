$(() => {
  var counter = 1;
  $('#the-button').on('click', async () => {
    var res = await fetch('/test-header', {
      headers: {
        'x_access_token':
          'some_value_' + (counter++),
      },
    });
    var body = await res.text();

    $('#the-list').append(`
      <li class="list-group-item">
        ${body}
      </li>
    `);
  })
});
