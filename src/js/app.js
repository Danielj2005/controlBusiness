
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('show');
        mainContent.classList.toggle('sidebar-shown');
    });

    // Section navigation
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.add('d-none'));
            
            // Show selected section
            const targetSection = document.getElementById(this.dataset.section);
            if (targetSection) {
                targetSection.classList.remove('d-none');
            }

            // Close sidebar on mobile
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
                mainContent.classList.remove('sidebar-shown');
            }
        });
    });

    // Initialize charts
    const ventasChart = new Chart(document.getElementById('ventasChart'), {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
                label: 'Ventas',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#4361ee',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    const productosChart = new Chart(document.getElementById('productosChart'), {
        type: 'bar',
        data: {
            labels: ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5'],
            datasets: [{
                label: 'Unidades Vendidas',
                data: [65, 59, 80, 81, 56],
                backgroundColor: '#4cc9f0'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form validation logic here
        });
    });

    // Table row actions
    const tableRows = document.querySelectorAll('table tbody tr');
    tableRows.forEach(row => {
        const deleteBtn = row.querySelector('.btn-outline-danger');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                if (confirm('¿Estás seguro de eliminar este registro?')) {
                    row.remove();
                }
            });
        }
    });

    // Modal handling
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function() {
            // Add any modal initialization code here
        });
    });

    // Responsive table handling
    function handleResponsiveTables() {
        const tables = document.querySelectorAll('.table-responsive');
        tables.forEach(table => {
            if (window.innerWidth <= 768) {
                table.classList.add('table-responsive-sm');
            } else {
                table.classList.remove('table-responsive-sm');
            }
        });
    }

    window.addEventListener('resize', handleResponsiveTables);
    handleResponsiveTables();

    // Gestión de Productos
    const productosTable = document.querySelector('#productos table tbody');
    const guardarProductoBtn = document.getElementById('guardarProducto');
    
    guardarProductoBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombreProducto').value;
        const precio = parseFloat(document.getElementById('precioProducto').value);
        const stock = parseInt(document.getElementById('stockProducto').value);
        const categoria = document.getElementById('categoriaProducto').value;
        const descripcion = document.getElementById('descripcionProducto').value;

        if (!nombre || isNaN(precio) || isNaN(stock) || !categoria) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }

        // Generar ID único
        const id = 'P' + Date.now().toString().slice(-4);

        // Crear nueva fila en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>#${id}</td>
            <td>${nombre}</td>
            <td>$${precio.toFixed(2)}</td>
            <td>${stock}</td>
            <td>${categoria}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        productosTable.appendChild(newRow);

        // Limpiar formulario y cerrar modal
        document.getElementById('productoForm').reset();
        bootstrap.Modal.getInstance(document.getElementById('nuevoProductoModal')).hide();

        // Mostrar mensaje de éxito
        // alert('Producto agregado exitosamente');
        Toastify({
            text: "Producto agregado exitosamente",
            className: "success",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    });

    // Gestión de Clientes
    const clientesTable = document.querySelector('#clientes table tbody');
    const guardarClienteBtn = document.getElementById('guardarCliente');
    
    guardarClienteBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombreCliente').value;
        const email = document.getElementById('emailCliente').value;
        const telefono = document.getElementById('telefonoCliente').value;
        const direccion = document.getElementById('direccionCliente').value;
        const tipo = document.getElementById('tipoCliente').value;

        if (!nombre || !email || !telefono || !tipo) {
            alert('Por favor complete todos los campos requeridos');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor ingrese un email válido');
            return;
        }

        // Generar ID único
        const id = 'C' + Date.now().toString().slice(-4);

        // Crear nueva fila en la tabla
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>#${id}</td>
            <td>${nombre}</td>
            <td>${email}</td>
            <td>${telefono}</td>
            <td>0</td>
            <td>
                <button class="btn btn-sm btn-outline-primary me-1">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;

        clientesTable.appendChild(newRow);

        // Limpiar formulario y cerrar modal
        document.getElementById('clienteForm').reset();
        bootstrap.Modal.getInstance(document.getElementById('nuevoClienteModal')).hide();

        // Mostrar mensaje de éxito
        alert('Cliente agregado exitosamente');
    });

    // Función para actualizar los selectores de clientes y productos en el modal de pedidos
    function actualizarSelectores() {
        const clienteSelect = document.querySelector('#nuevoPedidoModal select:first-child');
        const productoSelect = document.querySelector('#nuevoPedidoModal .table select');
        
        // Limpiar selectores
        clienteSelect.innerHTML = '<option value="">Seleccionar cliente...</option>';
        productoSelect.innerHTML = '<option value="">Seleccionar producto...</option>';

        // Agregar clientes
        document.querySelectorAll('#clientes table tbody tr').forEach(row => {
            const id = row.cells[0].textContent;
            const nombre = row.cells[1].textContent;
            const option = document.createElement('option');
            option.value = id;
            option.textContent = nombre;
            clienteSelect.appendChild(option);
        });

        // Agregar productos
        document.querySelectorAll('#productos table tbody tr').forEach(row => {
            const id = row.cells[0].textContent;
            const nombre = row.cells[1].textContent;
            const precio = row.cells[2].textContent;
            const option = document.createElement('option');
            option.value = id;
            option.textContent = `${nombre} - ${precio}`;
            productoSelect.appendChild(option);
        });
    }

    // Actualizar selectores cuando se abren los modales
    document.getElementById('nuevoPedidoModal').addEventListener('shown.bs.modal', actualizarSelectores);
    document.getElementById('nuevoProductoModal').addEventListener('hidden.bs.modal', actualizarSelectores);
    document.getElementById('nuevoClienteModal').addEventListener('hidden.bs.modal', actualizarSelectores);
}); 