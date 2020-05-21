/* eslint-env mocha, browser */
/* global proclaim */

describe('Intl.ListFormat', function () {
  before(function() {
    if (Intl.PluralRules && typeof Intl.PluralRules.__addLocaleData === 'function') {
      Intl.PluralRules.__addLocaleData({
        locale: "en",
        categories: { cardinal: ["one", "other"], ordinal: ["one", "two", "few", "other"] },
        fn: function (n, ord) {
          var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n,
            n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
          if (ord) return (n10 == 1 && n100 != 11) ? 'one'
            : (n10 == 2 && n100 != 12) ? 'two'
              : (n10 == 3 && n100 != 13) ? 'few'
                : 'other';
          return (n == 1 && v0) ? 'one' : 'other';
        }
      });
    }

    if (Intl.ListFormat && typeof Intl.ListFormat.__addLocaleData === 'function') {
      Intl.ListFormat.__addLocaleData({"data":{"en-001":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, {1}","pair":"{0}, {1}"}},"disjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"}}},"en-150":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, {1}","pair":"{0}, {1}"}},"disjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} or {1}","pair":"{0} or {1}"}}},"en-CA":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, and {1}","pair":"{0} and {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, and {1}","pair":"{0} and {1}"}}},"en-IN":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0} and {1}","pair":"{0} and {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, and {1}","pair":"{0}, {1}"}}},"en":{"conjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, and {1}","pair":"{0} and {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, & {1}","pair":"{0} & {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, {1}","pair":"{0}, {1}"}},"disjunction":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, or {1}","pair":"{0} or {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, or {1}","pair":"{0} or {1}"},"narrow":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, or {1}","pair":"{0} or {1}"}},"unit":{"long":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, {1}","pair":"{0}, {1}"},"short":{"start":"{0}, {1}","middle":"{0}, {1}","end":"{0}, {1}","pair":"{0}, {1}"},"narrow":{"start":"{0} {1}","middle":"{0} {1}","end":"{0} {1}","pair":"{0} {1}"}}}},"availableLocales":["en-001","en-150","en-AE","en-AG","en-AI","en-AS","en-AT","en-AU","en-BB","en-BE","en-BI","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CH","en-CK","en-CM","en-CX","en-CY","en-DE","en-DG","en-DK","en-DM","en-ER","en-FI","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GU","en-GY","en-HK","en-IE","en-IL","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MG","en-MH","en-MO","en-MP","en-MS","en-MT","en-MU","en-MW","en-MY","en-NA","en-NF","en-NG","en-NL","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SE","en-SG","en-SH","en-SI","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-US-POSIX","en-US","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","en"],"aliases":{},"parentLocales":{"en-150":"en-001","en-AG":"en-001","en-AI":"en-001","en-AU":"en-001","en-BB":"en-001","en-BM":"en-001","en-BS":"en-001","en-BW":"en-001","en-BZ":"en-001","en-CA":"en-001","en-CC":"en-001","en-CK":"en-001","en-CM":"en-001","en-CX":"en-001","en-CY":"en-001","en-DG":"en-001","en-DM":"en-001","en-ER":"en-001","en-FJ":"en-001","en-FK":"en-001","en-FM":"en-001","en-GB":"en-001","en-GD":"en-001","en-GG":"en-001","en-GH":"en-001","en-GI":"en-001","en-GM":"en-001","en-GY":"en-001","en-HK":"en-001","en-IE":"en-001","en-IL":"en-001","en-IM":"en-001","en-IN":"en-001","en-IO":"en-001","en-JE":"en-001","en-JM":"en-001","en-KE":"en-001","en-KI":"en-001","en-KN":"en-001","en-KY":"en-001","en-LC":"en-001","en-LR":"en-001","en-LS":"en-001","en-MG":"en-001","en-MO":"en-001","en-MS":"en-001","en-MT":"en-001","en-MU":"en-001","en-MW":"en-001","en-MY":"en-001","en-NA":"en-001","en-NF":"en-001","en-NG":"en-001","en-NR":"en-001","en-NU":"en-001","en-NZ":"en-001","en-PG":"en-001","en-PH":"en-001","en-PK":"en-001","en-PN":"en-001","en-PW":"en-001","en-RW":"en-001","en-SB":"en-001","en-SC":"en-001","en-SD":"en-001","en-SG":"en-001","en-SH":"en-001","en-SL":"en-001","en-SS":"en-001","en-SX":"en-001","en-SZ":"en-001","en-TC":"en-001","en-TK":"en-001","en-TO":"en-001","en-TT":"en-001","en-TV":"en-001","en-TZ":"en-001","en-UG":"en-001","en-VC":"en-001","en-VG":"en-001","en-VU":"en-001","en-WS":"en-001","en-ZA":"en-001","en-ZM":"en-001","en-ZW":"en-001","en-AT":"en-150","en-BE":"en-150","en-CH":"en-150","en-DE":"en-150","en-DK":"en-150","en-FI":"en-150","en-NL":"en-150","en-SE":"en-150","en-SI":"en-150"}})
    }
  });
  it('format should work for style conjunction', function () {
    proclaim.equal(new Intl.ListFormat('en', { type: 'conjunction', style: 'long' }).format(['a', 'b', 'c']), 'a, b, and c');
  });
});
