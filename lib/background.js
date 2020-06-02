
chrome.commands.onCommand.addListener(function (command) {
    if (command == 'test') {
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function (tab) {
            chrome.tabs.create({
                'url': 'https://translate.google.com.br/translate?hl=pt-BR&sl=en&tl=pt&u=' + tab[0].url
            });
        });
    }
});