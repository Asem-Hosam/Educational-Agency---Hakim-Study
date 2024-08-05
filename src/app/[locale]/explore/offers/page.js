import CountdownCard from '../../../../../components/offercard/offercard';

export default function Offers() {

    const targetDate = '2024-08-10';
    const targetDate2 = '2024-08-7';
    const title = 'Event Countdown';
    const description = 'This is the description of the event.';
    return (
        <div>
            <CountdownCard title={title} description={description} targetDate={targetDate} />
            <CountdownCard title={title} description={description} targetDate={targetDate2} />
        </div>
    );
}