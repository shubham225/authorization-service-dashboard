import { TextField } from "@mui/material";
import MultipleSelect from "components/MultipleSelect";
import { useEffect, useState } from "react";
import { fetchAllRoles } from "services/RoleService";
import { TUserFormProps } from "types/PropsTypes";
import { useAlert } from "hooks/useAlert";

export const UserForm = (props: TUserFormProps) => {
  const { formik } = props;
  const [rolesEnum, setRolesEnum] = useState<string[]>([]);
  const { showAlert } = useAlert();

  // Fetch Roles
  useEffect(() => {
    fetchAllRolesAsync();
  }, []);

  const fetchAllRolesAsync = async () => {
    try {
      const values = await fetchAllRoles();
      const rolesData = values.map((role) => role.role);
      setRolesEnum(rolesData);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        id="username"
        name="username"
        value={formik?.values.username}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.username && !!formik?.errors.username}
        helperText={formik?.touched.username && formik?.errors.username}
        label="Username"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        value={formik?.values.password}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.password && !!formik?.errors.password}
        helperText={formik?.touched.password && formik?.errors.password}
        label="Password"
        type="password"
        margin="normal"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        value={formik?.values.email}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.email && !!formik?.errors.email}
        helperText={formik?.touched.email && formik?.errors.email}
        label="E-Mail"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="mobile"
        name="mobile"
        value={formik?.values.mobile}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.mobile && !!formik?.errors.mobile}
        helperText={formik?.touched.mobile && formik?.errors.mobile}
        label="Mobile"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="address"
        name="address"
        value={formik?.values.address}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.address && !!formik?.errors.address}
        helperText={formik?.touched.address && formik?.errors.address}
        label="Address"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="city"
        name="city"
        value={formik?.values.city}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.city && !!formik?.errors.city}
        helperText={formik?.touched.city && formik?.errors.city}
        label="City"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="country"
        name="country"
        value={formik?.values.country}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.country && !!formik?.errors.country}
        helperText={formik?.touched.country && formik?.errors.country}
        label="Country"
        type="input"
        margin="normal"
      />
      <MultipleSelect
        id="roles"
        name="roles"
        value={formik?.values.roles}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.roles && !!formik?.errors.roles}
        label="Roles"
        margin="normal"
        enums={rolesEnum}
      />
    </>
  );
};
