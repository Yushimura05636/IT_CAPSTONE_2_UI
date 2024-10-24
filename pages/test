<template>
Processing...
</template>

<script lang="ts">
import { apiService } from '~/routes/api/API';
import { CustomersService } from '~/models/Customer';

//no use of onmounted
setCustomerData();
sendCustomerData();

function formatDateTimeToMySQL(date: any) {
  const pad = (num: any) => (num < 10 ? '0' + num : num);
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; // Return as Y-m-d H:i:s
}

function formatDateToMySQL(date: any) {
  const pad = (num: any) => (num < 10 ? '0' + num : num);
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1); // Months are zero-based
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

async function setCustomerData()
{
    // Set values using the setters before sending
    CustomersService.group_id = 1; // Set group_id
    CustomersService.passbook_no = 123456; // Set passbook_no
    CustomersService.loan_count = 2; // Set loan_count
    CustomersService.enable_mortuary = 1; // Set enable_mortuary
    
    // Set optional fields if needed
    CustomersService.mortuary_coverage_start = undefined; // Set optional date
    CustomersService.mortuary_coverage_end = undefined;
    CustomersService.personality_id = 1; // Set personality_id


    // Set Personality fields
    CustomersService.first_name = 'Johns';
    CustomersService.family_name = 'Doese';
    CustomersService.datetime_registered = new Date('1990-01-01'); // Current date
    CustomersService.name_type_code = 1;
    CustomersService.middle_name = 'Smith';
    CustomersService.birthday = new Date('1990-01-01'); // Example date
    CustomersService.civil_status = 1; // Example status
    CustomersService.gender_code = 1; // Example gender
    CustomersService.house_street = '123 Main St';
    CustomersService.purok_zone = 'Zone 1';
    CustomersService.postal_code = '12345';
    CustomersService.telephone_no = '0123456789';
    CustomersService.email_address = 'john.doe@example.com';
    CustomersService.cellphone_no = '0987654321';
    CustomersService.personality_status_code = 1;
    CustomersService.barangay_id = 1;
    CustomersService.city_id = 1;
    CustomersService.country_id = 1;
    CustomersService.province_id = 1;
    CustomersService.credit_status_id = 1;
    CustomersService.notes = 'Sample note'; // optional
}

async function sendCustomerData()
{
    try {
    // Gather data using the getters from CustomersService
    // Create customer data object
    const jsonObject = {
        customer: {
            group_id: CustomersService.group_id,
            passbook_no: CustomersService.passbook_no,
            loan_count: CustomersService.loan_count,
            enable_mortuary: CustomersService.enable_mortuary,
            mortuary_coverage_start: CustomersService.mortuary_coverage_start,
            mortuary_coverage_end: CustomersService.mortuary_coverage_end,
            personality_id: CustomersService.personality_id,
        },
        personality: {
            datetime_registered: formatDateToMySQL(CustomersService.datetime_registered),
            family_name: CustomersService.family_name,
            middle_name: CustomersService.middle_name,
            first_name: CustomersService.first_name,
            birthday: formatDateToMySQL(CustomersService.birthday),
            civil_status: CustomersService.civil_status,
            gender_code: CustomersService.gender_code,
            house_street: CustomersService.house_street,
            purok_zone: CustomersService.purok_zone,
            postal_code: CustomersService.postal_code,
            telephone_no: CustomersService.telephone_no,
            email_address: CustomersService.email_address,
            cellphone_no: CustomersService.cellphone_no,
            name_type_code: CustomersService.name_type_code,
            personality_status_code: CustomersService.personality_status_code,
            barangay_id: CustomersService.barangay_id,
            city_id: CustomersService.city_id,
            country_id: CustomersService.country_id,
            province_id: CustomersService.province_id,
            credit_status_id: CustomersService.credit_status_id,
            notes: CustomersService.notes, // optional
        }
    };

    // Send POST request to your Laravel API
    const response = await apiService.createCustomer(jsonObject)
    alert('Data sent successfully:' + response);
  } catch (error) {
    alert('Error sending data to Laravel API:' + error);
    toast.error(error.message, {
        autoClose: 5000,
      });
  }
} 
</script>