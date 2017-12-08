.each(document.styleSheets, function (sheet) {
    var rulesToLoose = [];
    .each(sheet.cssRules, function (rule, index) {
        if (rule.selectorText && rule.selectorText.indexOf(':hover') > 0) {
            rulesToLoose.push(index);
        }
    });

    .each(rulesToLoose.reverse(), function (index) {
        if (sheet.deleteRule) {
            sheet.deleteRule(index);
        } else if (sheet.removeRule) {
            sheet.removeRule(index);
        }
    });
});
