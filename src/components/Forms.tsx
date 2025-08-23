import Header from './Header';
import {
  FormType,
  ONLINEFORMSDATA,
  PRINTABLEFORMSDATA,
} from '../data/FormsData';
import Section from './Section';

const Forms = () => {
  return (
    <>
      <Header />
      <Section title='Online Forms' id='online-forms'>
        <p>The quickest and easiest way to complete all of your forms for the team.</p>
        {ONLINEFORMSDATA.map((onlineForm: FormType) => {
          return (
            <button key={onlineForm.id} onClick={() => window.open(onlineForm.url)} className='form-button'>
              {onlineForm.title}
            </button>
            // <button key={onlineForm.id} className='form-button'>
            //   {onlineForm.title}
            // </button>
          );
        })}
      </Section>
      <Section title='Printable Forms' id='print-forms'>
        <p>Use these links if you want to have a PDF version of the forms to read and fill out. Please return signed PDFs to one of the coaches.</p>
        {PRINTABLEFORMSDATA.map((printFrom: FormType) => {
          return (
            <button key={printFrom.id} onClick={() => window.open(printFrom.url)} className='form-button'>
              {printFrom.title}
            </button>
          );
        })}
      </Section>
    </>
  );
};

export default Forms;
