<template>
    <div>
        <Navbar />
        <h1 class="text-center m-5">ADMIN PAGE</h1>
        <div class="container">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add Product
            </button>

            <!-- Modal -->
            <div class="modal fade position-relative custom-modal" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add A Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="productName" class="form-label">BMX Name</label>
                                <input type="text" class="form-control" name="productName">
                            </div>
                            <div class="mb-3">
                                <label for="productDesc" class="form-label">BMX Descripion</label>
                                <textarea name="productDesc" class="form-control" id="productDesc" cols="30"
                                    rows="10"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="text" class="form-control" name="quantity">
                            </div>
                            <div class="mb-3">
                                <label for="category" class="form-label">Category</label>
                                <input type="text" class="form-control" name="category">
                            </div>
                            <div class="mb-3">
                                <label for="image" class="form-label">Image</label>
                                <input type="text" class="form-control" id="image">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BXM Name</th>
                            <th>BMX Description</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="bike in bikes" :key="bike.bmxID">
                            <td>{{ bike.bmxID }}</td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.prodName }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" v-model="bike.prodName" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.prodDesc }}</td>
                            </template>
                            <template v-else>
                                <textarea class="form-control w-100 h-100" id="exampleFormControlTextarea1" rows="10" cols="50"
                                    v-model="bike.prodDesc"></textarea>
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.quantity }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.quantity" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>R{{ bike.amount }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.amount" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                            <td>{{ bike.category }}</td>
                            </template>
                            <template v-else>
                                <input type="text" name="name" class="w-100" v-model="bike.category" id="">
                            </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                                    <img :src="bike.prodUrl" style="width: 10rem" alt="">
                                </template>
                                <template v-else>
                                    <input type="text" name="name" class="w-100" v-model="bike.prodUrl" id="">
                                </template>
                            </td>
                            <td>
                                <template v-if="!bike.isEdit">
                                    <button class="btn btn-dark my-2 " @click="startEdit(bike)">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-success my-2 disabled" @click="saveEdit(bike)">
                                        <i class="bi bi-save2"></i>
                                    </button>
                                    <button class="btn btn-danger" @click="stopEdit(bike)">
                                        <i class="bi bi-x-circle"></i>
                                    </button>
                                </template>
                                <template v-if="!bike.isEdit">
                                    <button class="btn btn-danger" @click="delProd(bike.bmxID)">
                                        <i class="bi bi-trash3"></i>
                                    </button>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/NavbarComp.vue'
import { mapActions, mapState } from 'vuex';
export default {
    components: {
        Navbar
    },
    computed: {
        ...mapState(['bikes'])
    },
    mounted() {
        this.fetchBikes()
    },
    methods: {
        ...mapActions(['fetchBikes', 'updateBike', 'deleteProd']),
        startEdit(bike) {
            bike.isEdit = true
        },
        saveEdit(bike) {
            bike.isEdit = false
        },
        stopEdit(bike) {
            bike.isEdit = false
        },
        async saveEdit(bike) {
            try {
                const { isEdit, ...updateProd } = bike
                await this.updateBike(updateProd)
                bike.isEdit = false
            } catch (error) {
                console.error('Error updating board in component:', error);
                console.log('Product:', bike);
            }
        },
        delProd(bike) {
            try {
                this.deleteProd(bike)
            } catch (error) {

            }
        }
    }
}
</script>

<style scoped>
.custom-modal {
    z-index: 999999;
}
</style>