// Checks if request has correct password value

function validPassword(input: string) {
  const expected_password = process.env.SCHWAIGER_ADMIN_PASSWORD || "admin";

  return input == expected_password;
}

function validCall(event: any) {
  const query = getQuery(event);

  const password = query.password?.toString() || "";

  return validPassword(password);
}

export default defineEventHandler((event) => {
  if (event.path.startsWith("/api/admin")) {
    const correctPassword = validCall(event);

    if (!correctPassword) {
      throw createError({
        statusCode: 401,
        message:
          "Invalid Password! Provide a Password with the password query parameter.",
      });
    }
  }
});
