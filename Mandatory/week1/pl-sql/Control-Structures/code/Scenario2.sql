SET SERVEROUTPUT ON;

BEGIN 
    FOR c IN (SELECT CustomerID,Balance FROM Customers)
    LOOP
        IF c.Balance>10000 THEN
            UPDATE Customers
            SET IsVIP='Y'
            where CustomerID=c.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Customer '||c.CustomerID||' promoted to VIP.');
        END IF;
    END LOOP;
    COMMIT;

END;
/
