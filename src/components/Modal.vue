<template>
    <div class="modal-backdrop">
        <div class="modal">
            <div class="modal-body">
                <div>
                    <div>This is the default tile!</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique reiciendis at voluptatum totam, eius in iusto harum iure distinctio expedita rerum, quidem placeat voluptatem. Excepturi laboriosam corrupti corporis minus ullam aperiam quo obcaecati, quod quibusdam iste. Maiores, ratione velit consectetur earum dignissimos incidunt ut! Autem unde perspiciatis veniam sapiente beatae similique delectus architecto, minus soluta labore deserunt vitae? Assumenda rerum minima earum natus incidunt doloremque nihil eum dolorum quas.</p>
                    <button type="button" class="btn-close" @click="close">x</button>
                </div>
            </div>            
        </div>
  </div>
</template>

<script>
    export default {
        methods: {
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
.modal-backdrop {
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}

  .modal {
    background: #e4f5f0;
    box-shadow: 0 0 70px 0 rgba(0, 0, 0, 0.3);
    overflow-x: auto;
    top: 0;
    width: 740px;
    height: 100%;
    position: absolute;
    right: 0;
}

  .modal-body {
    width: 80%;
    margin: 0 auto;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    padding: 20px 10px;
}

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}
</style>