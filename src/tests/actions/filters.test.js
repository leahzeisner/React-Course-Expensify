import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from "moment";


// Tests for setTextFilter

test('should generate set text filter action object for nonempty text', () => {
    const action = setTextFilter("some test text");

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "some test text"
    });
});

test('should generate set text filter action object for empty text', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ""
    });
});




// Tests for sortByAmount

test('should generate sort by amount action object', () => {
    const action = sortByAmount()

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});




// Tests for sortByDate

test('should generate sort by date action object', () => {
    const action = sortByDate()

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});




// Tests for setStartDate

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});




// Tests for setEndDate

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});