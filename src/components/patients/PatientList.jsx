import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import { AgGridColumn } from 'ag-grid-react/lib/agGridColumn';
import 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { getAllPatients } from '../../api/patientsApi'
import GenderCellRenderer from '../../components/tables/GenderCellRenderer'
import { SelectCellEditor } from 'ag-grid-community';
import { useSelector } from 'react-redux';
import ButtonsClickRenderer from '../tables/ButtonsClickRenderer'
import { useTranslation } from 'react-i18next';
import { Input } from '@material-ui/core';



const PatientList = ({ edit }) => {

    const { t } = useTranslation()

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [quickFilter, setQuickFilter] = useState("")
    const user = useSelector(state => state.auth.user)

    const editElement = id => {
        console.log("editar elemento ", id)
    }

    const patients = useSelector(state => state.patient.patients)

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const onFirstDataRendered = (params) => {
        params.api.sizeColumnsToFit();
    };


    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: "inline-block", width: "100%", marginTop: 10, marginBottom: 10 }}>
                <div style={{ float: "right", marginRight: 40 }}>
                    <Input type="text" id="quickFilter" onChange={e => setQuickFilter(e.target.value)} value={quickFilter}
                        placeholder="Buscar en todo" />
                </div>
            </div>

            <div className="ag-theme-alpine" style={{ height: "100%", width: "100%" }}>
                <AgGridReact
                    onGridReady={onGridReady}
                    quickFilterText={quickFilter}
                    rowData={patients}
                    rowSelection="multiple"
                    onFirstDataRendered={onFirstDataRendered}
                    defaultColDef={{
                        resizable: true, editable: user.role === "admin", floatingFilter: true
                    }}
                    frameworkComponents={{
                        genderCellRenderer: GenderCellRenderer,
                        SelectCellEditor, ButtonsClickRenderer
                    }}
                    context={{
                        edit: (id, viewMode) => edit(id, viewMode)
                    }}
                >
                    <AgGridColumn sortable={true} filter={true} field="id" checkboxSelection={true}></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="nombre"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="apellidos"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="nreg"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="nss"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="sip"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="nhist"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="fnac"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="turno"></AgGridColumn>
                    <AgGridColumn sortable={true} filter={true} field="sexo"
                        cellRenderer="genderCellRenderer"
                        cellEditor="agSelectCellEditor"
                        cellEditorParams={{
                            values: [t('man'), t('woman')],
                            cellRenderer: 'genderCellRenderer',
                        }}
                    ></AgGridColumn>
                    <AgGridColumn field="id" cellRenderer="ButtonsClickRenderer"></AgGridColumn>

                </AgGridReact>
            </div>
        </div>
    )
}

export default PatientList
