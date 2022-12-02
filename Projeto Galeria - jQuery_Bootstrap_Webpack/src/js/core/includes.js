import $ from 'jquery';

const loadHtmlSuccessCallbacks = [];

// guarda as funções após o processamento bem sucedido do  html (as funções amarradas aos seus devidos htmls)
export function onLoadHtmlSuccess(callback)
{
    if(!loadHtmlSuccessCallbacks.includes(callback))
    {
        loadHtmlSuccessCallbacks.push(callback);
    }
}

function loadIncludes(parent)
{
    if(!parent) parent = 'body';

    $(parent).find('[wm-include]').each(function(i, e)
    {
        const url = $(e).attr('wm-include');

        $.ajax({
            url,
            success(data)
            {
                $(e).html(data)
                $(e).removeAttr('wm-include') //evitando 2o processamento

                loadHtmlSuccessCallbacks.forEach(callback => callback(data));
                loadIncludes(e) // recursivamente processa todos os elementos q tem wm-include
            }
        })
    });
}

loadIncludes();