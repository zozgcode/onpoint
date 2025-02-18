import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Timothy Bernando',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'timbernando38@gmail.com',
      createdOn: '2/5/2025', // m/d/y
      username: 'sample',
      password: 'sample'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: false,
      account_number: false,
      balance_usd: 75225120.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2025',
        description: 'AirBnB Hawaii debit',
        status: 'Success',
        amount_usd: -4850.0
      },
      {
        dateTime: 'February 2, 2025',
        description: 'Debit from United airlines',
        status: 'Success',
        amount_usd: -1800.0
      },
      {
        dateTime: 'January 28, 2025',
        description: 'Withdrawal from R&B trading',
        status: 'Success',
        amount_usd: 850050.17
      },
      {
        dateTime: 'January 26, 2025',
        description: 'Withdrawal chk#229152',
        status: 'Success',
        amount_usd: -250120.0
      },
      {
        dateTime: 'December 29, 2024',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'December 17, 2024',
        description: 'Teller Withdrawal',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'December 15, 2024',
        description: 'Credit from fidelity investment',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'December 13, 2024',
        description: 'Transfer to Joe Harden',
        status: 'Success',
        amount_usd: -320000.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Debit from Netgear',
        status: 'Success',
        amount_usd: -200000.0,
        account_no: '****4593'
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Transfer to Infrastructure Development',
        status: 'Success',
        amount_usd: -400000.0,
        account_no: '****1682'
      },
      {
        dateTime: 'October 10, 2023',
        description: 'Credit from D&D Building',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****8293'
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Debit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: -500000.0,
        account_no: '****4527'
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Western Digital',
        status: 'Success',
        amount_usd: -300000.0,
        account_no: '****6471'
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Credit from Asana',
        status: 'Success',
        amount_usd: 350000.0,
        account_no: '****3975'
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Credit from Seagate Technology',
        status: 'Success',
        amount_usd: 150000.0,
        account_no: '****2849'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      firstName: 'Isabella Gurdan',
      lastName: '',
      mobileNumber: '+1-***-***-****',
      email: 'isabellagurdan881@gmail.com',
      createdOn: '2/18/2025', // m/d/y
      username: 'isabellagurdan881',
      password: 'Love4456#'
    },
    bank_details: {
      account_type: 'Checking',
      account_name: true,
      account_number: true,
      account_number_text: '',
      balance_usd: 473678.17
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '235456',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 23, 2024',
        description: 'Check no:3479.',
        status: 'Pending',
        amount_usd: 7500.0
      },
      {
        dateTime: 'October 17, 2024',
        description: 'Payment from David A, petosa',
        status: 'Success',
        amount_usd: 85000.0
      },
      {
        dateTime: 'September 13, 2024',
        description: 'SET Nopibs -Philadelphia',
        status: 'Success',
        amount_usd: -80.21
      },
      {
        dateTime: 'August 20, 2024',
        description: 'PA, Auto sales',
        status: 'Success',
        amount_usd: -1700.0
      },
      {
        dateTime: 'August 5, 2024',
        description: 'Electric bill',
        status: 'Success',
        amount_usd: -287.85
      },
      {
        dateTime: 'March 22, 2024',
        description: 'Phone bill',
        status: 'Success',
        amount_usd: -75.4
      },
      {
        dateTime: 'December 10, 2023',
        description: 'Withdrawal from bitpay',
        status: 'Success',
        amount_usd: -6000.0
      },
      {
        dateTime: 'September 25, 2023',
        description: 'Withdrawal chk#',
        status: 'Success',
        amount_usd: -175.0
      },
      {
        dateTime: 'August 15, 2023',
        description: 'Debit from Walmart',
        status: 'Success',
        amount_usd: -1200.0
      },
      {
        dateTime: 'July 5, 2023',
        description: 'Debit from Greenbean coffee pa.',
        status: 'Success',
        amount_usd: -12.1
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Fashion District Philadelphia',
        status: 'Success',
        amount_usd: -2000.0,
        account_no: '****2849'
      }
    ]
  }
];
