import React from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  MenuItem,
  Box,
  CardHeader,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./mycomponent.css";

const MyComponent = () => {
  const signUpSchema = z.object({
    firstname: z.string().min(1, "First name is required"),
    lastname: z.string().optional(),
    dob: z.string().min(1, "Birth date is required"), // Consider using z.date() if handling date objects
    country: z.string().min(1, "Country is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters")
      .refine((data) => data.password === data.confirm, {
        message: "Passwords do not match",
        path: ["confirm"],
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Card sx={{ width: 600, padding: 3, boxShadow: 3, margin: 3 }}>
        <CardHeader title="Sign Up" />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              {/* Firstname */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  {...register("firstname")}
                  fullWidth
                  label="First name"
                />
              </Grid>
              {errors.firstname && (
                <Typography className="text-red-500">{`${errors.firstname.message}`}</Typography>
              )}

              {/* Lastname */}
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <TextField
                  {...register("lastname")}
                  fullWidth
                  label="Lastname"
                />
              </Grid>
              {errors.lastname && (
                <p className="text-red-500">{`${errors.lastname.message}`}</p>
              )}

              {/* Birth Date */}
              <Grid item xs={12}>
                <TextField
                  {...register("dob")}
                  fullWidth
                  label="Birth Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              {errors.dob && (
                <p className="text-red-500">{`${errors.dob.message}`}</p>
              )}

              {/* Gender */}
              {/* <Grid item xs={12}>
                <TextField
                  {...register("gender")}
                  fullWidth
                  select
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>
              </Grid> */}

              {/* Country */}
              <Grid item xs={12}>
                <TextField {...register("country")} fullWidth label="Country" />
              </Grid>
              {errors.country && (
                <p className="text-red-500">{`${errors.country.message}`}</p>
              )}

              {/* Email */}
              <Grid item xs={12}>
                <TextField
                  {...register("email")}
                  fullWidth
                  label="Email"
                  type="email"
                />
              </Grid>
              {errors.email && (
                <p className="text-red-500">{`${errors.email.message}`}</p>
              )}

              {/* Password */}
              <Grid item xs={12}>
                <TextField
                  {...register("password")}
                  fullWidth
                  label="Password"
                  type="password"
                />
              </Grid>
              {errors.password && (
                <p className="text-red-500">{`${errors.password.message}`}</p>
              )}

              {/* Confirm Password */}
              <Grid item xs={12}>
                <TextField
                  {...register("confirm")}
                  fullWidth
                  label="Confirm Password"
                  type="password"
                />
              </Grid>
              {errors.confirm && (
                <p className="text-red-500">{`${errors.confirm.message}`}</p>
              )}

              {/* Signup Button */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting.." : "Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MyComponent;
