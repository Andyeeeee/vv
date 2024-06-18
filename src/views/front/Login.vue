<template>
  <div id="login" class="text-center">

    <div class="paper">

      <h1>Login</h1>
      <form action="/submit" method="POST">
        <label for="account">Account:</label><br>
        <input type="text" id="account" name="account"><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Submit" style="padding: 0 20px">
      </form>
    </div>
  </div>
</template>
<script setup>

</script>