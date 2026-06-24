CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance=Balance+(Balance*0.01)
    WHERE AccountType='Savings';


    DBMS_OUTPUT.PUT_LINE('Monthly Interest Applied Successfully');
    COMMIT;
END;
/

SET SERVEROUTPUT ON;

BEGIN
    ProcessMonthlyInterest;
END;
/