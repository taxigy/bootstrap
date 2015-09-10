// Simply 'inherites' helpers from AccountsTemplates
Template.atNavButton.helpers(AccountsTemplates.atNavButtonHelpers);

Template.atNavButton.helpers({
    className: function (className) {
        if (className) {
            return className;
        }

        return "btn btn-default navbar-btn";
    }
});

// Simply 'inherites' events from AccountsTemplates
Template.atNavButton.events(AccountsTemplates.atNavButtonEvents);
