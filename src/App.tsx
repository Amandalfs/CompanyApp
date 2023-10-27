import './global.scss';
import "react-toastify/dist/ReactToastify.css";
import { Header } from './components/Header/Header';
import { ButtonAddCompany } from './components/ButtonAddCompany/ButtonAddCompany';
import { Search } from './components/Search/Search';
import { TableCompanies } from './components/TableCompanies/TableCompanies';
import { useModals } from './hooks/useModals';
import { RegisterCompanyModal } from './components/modals/RegisterCompanyModal/RegisterCompanyModal';
import { EditAndDeleteCompanyModal } from './components/modals/EditAndDeleteCompanyModal/EditAndDeleteCompanyModal';
import { ToastContainer } from 'react-toastify';

function App() {
  const { isOpenModalRegister, isOpenModalAndDelete } = useModals();
  return (<div>
      <Header />
      <main className='main'>
        <Search />
        <ButtonAddCompany />
        <TableCompanies />
      </main>
    {
      isOpenModalRegister && 
      <RegisterCompanyModal />
    }
    {
      isOpenModalAndDelete && 
      <EditAndDeleteCompanyModal />
    }
    <ToastContainer />
  </div>)
}

export default App
