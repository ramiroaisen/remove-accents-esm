import tape from "tape";
import removeAccents, { removeAccents as named, hasAccents } from "./index.js";

tape('remove accents from string', function(t) {
	var input = 'ÀÁÂÃÄÅẤẮÆẦẰÇḈÈÉÊËẾḖỀḔÌÍÎÏḮÐÑÒÓÔÕÖØỐṌṒÙÚÛÜÝàáâãäåấắæầằçḉèéêëếḗềḕìíîïḯñòóôõöøốṍṓùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģǴǵĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķḰḱĹĺĻļĽľĿŀŁłḾḿŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵẂẃŶŷŸŹźŻżŽžſƒƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜỨứṸṹǺǻǼǽǾǿðÞþṔṕṤṥX́x́ЃѓЌќA̋a̋E̋e̋I̋i̋ǸǹỒồṐṑỪừẀẁỲỳȀȁȄȅȈȉȌȍȐȑȔȕẲẴẶḜẳẵặḝC̆c̆ḪḫK̆k̆M̆m̆N̆n̆P̆p̆R̆r̆T̆t̆V̆v̆X̆x̆Y̆y̆ȂȆȊȎȃȇȋȏȒȓȖȗșțȘȚB̌b̌F̌f̌ǦǧȞȟJ̌ǰǨǩM̌m̌P̌p̌Q̌q̌ṦṧV̌v̌W̌w̌X̌x̌Y̌y̌A̧a̧B̧b̧ḐḑȨȩƐ̧ɛ̧ḨḩI̧i̧Ɨ̧ɨ̧M̧m̧O̧o̧Q̧q̧U̧u̧X̧x̧Z̧z̧';
	var output = removeAccents(input);
	var expected = 'AAAAAAAAAEAACCEEEEEEEEIIIIIDNOOOOOOOOOUUUUYaaaaaaaaaeaacceeeeeeeeiiiiinooooooooouuuuyyAaAaAaCcCcCcCcDdDdEeEeEeEeEeGgGgGgGgGgHhHhIiIiIiIiIiIJijJjKkKkLlLlLlLlllMmNnNnNnnOoOoOoOEoeRrRrRrSsSsSsSsTtTtTtUuUuUuUuUuUuWwWwYyYZzZzZzsfOoUuAaIiOoUuUuUuUuUuUuUuAaAEaeOodTHthPpSsXxГгКкAaEeIiNnOoOoUuWwYyAaEeIiOoRrUuAAAEaaaeCcHhKkMmNnPpRrTtVvXxYyAEIOaeioRrUustSTBbFfGgHhJjKkMmPpQqSsVvWwXxYyAaBbDdEeEeHhIiIiMmOoQqUuXxZz';

	t.same( output, expected );

	t.end();
});

tape('do not modify non-accented strings', function(t) {
	var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789.,:;~`!@#$%^&*()-_=+[]{}\'"|\\<>?/';
	var output = removeAccents(input);

	t.same( output, input );

	t.end();
});

tape('.has can detect accents', function(t) {
	t.equal(hasAccents('À'), true);
	t.equal(hasAccents('Löwe'), true);

	t.equal(hasAccents('A'), false);
	t.equal(hasAccents('Panther'), false);

	t.end();
});

tape('named export', function(t) {
	t.strictEqual(removeAccents, named);
	t.end();
});
