import AppointmentForm from '../components/AppointmentForm';

function AppointmentsView(){
    const submitForm = (data) => {
        console.log(data);
      }

    return (
        <AppointmentForm submitForm={submitForm}/>
    );
}

export default AppointmentsView;
