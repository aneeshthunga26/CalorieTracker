import React, { useEffect, useState } from 'react';

interface CalorieWatcherProps {
    consumed?: number;
    target?: number;
}

/**
 * A Custom Hook which provides the display string for the {@link CalorieWatcher}
 * @param props: contains the consumed and target calories
 */
function useCalorieDisplayString(props: CalorieWatcherProps) {
    const consumed = props.consumed;
    const target = props.target;

    const [displayString, setDisplayString] = useState('');

    //redraw when the consumed and/or the target calories changes
    useEffect(
        () => {
            setDisplayString(constructDisplayString(consumed, target))
        },
        [consumed, target]
    );
    return displayString;
}

/**
 * Provides a formatted display string
 * @param consumed
 * @param target
 */
function constructDisplayString(consumed?: number, target?: number):string {
    const day = new Date().toLocaleString('en-us', {  weekday: 'long' });

    if (consumed !== undefined && target !== undefined) {
        return `${day} ${consumed} / ${target} (KCals)`;
    }
    else if (consumed !== undefined) {
        return `${day} ${consumed} (KCals)`;
    }
    else {
        return day;
    }
}

/**
 * Displays a formatted string with the current day, total consumed and target calories if they are available.
 * @param props: pass in a {@link CalorieWatcherProps} with the total and consumed calories.
 */
const CalorieWatcher: React.FC<CalorieWatcherProps> = (props?):JSX.Element => {
    //get the display string from the custom hook
    const displayString = useCalorieDisplayString(props);
    
    return(
        <span>
            <label>{displayString}</label>
        </span>
    );
}

export default CalorieWatcher;