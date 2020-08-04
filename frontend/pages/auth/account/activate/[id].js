import { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import { signup } from "../../../../actions/auth";
import { withRouter } from "next/router";
import jwt from "jsonwebtoken";
import { Button } from "reactstrap";
import Router from "next/router";

const ActivateAccount = ({ router }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    error: "",
    loading: false,
    success: false,
    showButton: true,
  });

  const { name, token, error, loading, success, showButton } = values;

  useEffect(() => {
    let token = router.query.id;
    if (token) {
      const { name } = jwt.decode(token);
      setValues({ ...values, name, token });
    }
  }, [router]);

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    signup({ token }).then((data) => {
      if (data.error) {
        setValues({
          ...values,
          error: data.error,
          loading: false,
          showButton: false,
        });
      } else {
        setValues({
          ...values,
          loading: false,
          success: true,
          showButton: false,
        });
      }
    });
  };

  const showLoading = () => {
    return loading ? <h2>Loading...</h2> : "";
  };

  return (
    <Layout>
      <div className="container">
        <h3 className="pb-5">Hey {name}, Rady too activte your account</h3>
        {showLoading()}
        {error && error}
        {success &&
          "Your have successfully activated your account. Please signin"}
        {showButton && (
          <button onClick={clickSubmit} className="btn btn-outline-primary">
            Activate your account
          </button>
        )}
      </div>
    </Layout>
  );
};

export default withRouter(ActivateAccount);
